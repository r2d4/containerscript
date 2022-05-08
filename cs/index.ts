import { Construct, Node } from 'constructs';

export class Image extends Construct {
  constructor(props = {}) {
    super(undefined, '');
  }

  public synth(): void {
    resolveDependencies(this);
  }


  public run(command: string): void {
    console.log(`Running command: ${command}`);
    this.node.addDependency(command);
  }
};

export class RunOp extends Construct {
  constructor(scope, id) {
    super(scope, id);
  }
}


function resolveDependencies(app: Construct) {

  const deps = [];
  for (const child of app.node.findAll()) {
    for (const dep of child.node.dependencies) {
      deps.push({ source: child, target: dep });
    }
  }

  for (const dep of deps) {

    // create explicit api object dependencies from implicit construct dependencies
    const targetApiObjects = Node.of(dep.target).findAll().filter(c => c);
    const sourceApiObjects = Node.of(dep.source).findAll().filter(c => c);

    for (const target of targetApiObjects) {
      for (const source of sourceApiObjects) {
        if (target !== source) {
          Node.of(source).addDependency(target);
        }
      }
    }
  }

  console.log(deps)
}

const img = new Image();

img.synth();


