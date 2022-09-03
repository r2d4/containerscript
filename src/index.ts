import { credentials } from "@grpc/grpc-js";
import { Construct } from "constructs";
import { LLBBridgeClient, SolveRequest } from "./proto/moby/buildkit/v1/frontend/gateway";
import { MergeOp, Source, SourceOp } from "./proto/pb/ops";


export class Build extends Construct {
    constructor(props = {}) {
        super(undefined as any, '');

        const buildImg = new Image(this, 'buildImage', {
            from: 'ubuntu:latest',
            buildArgs: {
                'http.proxy': 'http://proxy.example.com:8080',
                'https.proxy': 'https://proxy.example.com:8080',
            },
        });

        const appArtifacts = new AppBuilder(this, 'appBuild', {
            image: buildImg,
            source: new Source(this, 'gitSrc', {
                url: 'git://github.com/moby/buildkit.git',
            }),
        });

        new MergeOp(this, 'merge', {
            inputs: [
                new SourceOp(this, 'src1', {
                    source: appArtifacts.outputs.image,
                    exec: {
                        path: './bin/app',
                        args: ['--arg1', '--arg2'],
                    },
                }),    
        });

        const runtimeImage = new Image(this, 'runtimeImage', {
            from: buildImg,
            buildArgs: {
                'NODE_ENV': 'production',
            },
        });

        runtimeImage.copy(this, 'copy', {
            source: appArtifacts.outputs.image,
            destination: '/app',
        });
    }
}

class AppBuilder extends Construct {

}

const img = new Image();

const from = SourceOp.fromPartial({
    identifier: "docker-image://ubuntu:latest",
});

const buf = SourceOp.encode(from).finish();


// const exec = ExecOp.encode(ExecOp.fromPartial({
//     meta: {
//         args: ["ls", "-l"],
//     },
// })


const req = SolveRequest.fromPartial({
    Definition: {
        def: [Buffer.from(buf)],
    },

});

const client = new LLBBridgeClient('localhost', credentials.createInsecure());

(async function () {
    const { err, res } = await new Promise(resolve => {
        client.solve(req, (err, res) => {
            console.log(err, res);
            resolve({ err, res });
        });
    });
    console.log("error:", err, "res:", res);
})();
