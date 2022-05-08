PROTO_GO_OUT_DIR=/pkg/proto
PROTO_TS_OUT_DIR=/cs/lib

OUT_DIRS=${PROTO_GO_OUT_DIR} ${PROTO_TS_OUT_DIR}

PROTO_FILES := $(shell find $(shell pwd -P) -type f -name '*.proto')

GO_PROTO_OPT  = --go_out=${PROTO_GO_OUT_DIR}
GO_PROTO_OPT += --go-grpc_out=${PROTO_GO_OUT_DIR}
GO_PROTO_OPT += --go_opt=paths=source_relative
GO_PROTO_OPT += --go-grpc_opt=paths=source_relative

TS_PROTO_OPT  = --ts_proto_out=${PROTO_TS_OUT_DIR}
TS_PROTO_OPT += --ts_proto_opt=context=true
TS_PROTO_OPT += --ts_proto_opt=esModuleInterop=true
TS_PROTO_OPT += --ts_proto_opt=env=node
TS_PROTO_OPT += --ts_proto_opt=useDate=true
TS_PROTO_OPT += --ts_proto_opt=useOptionals=messages
TS_PROTO_OPT += --ts_proto_opt=outputServices=grpc-js

PHONY:.proto-in-docker
proto-in-docker:
	rm -r ${OUT_DIRS} || true
	mkdir -p ${OUT_DIRS}
	protoc -I=/proto $(PROTO_FILES) ${GO_PROTO_OPT} ${TS_PROTO_OPT}