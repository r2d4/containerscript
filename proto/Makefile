PROTO_TS_OUT_DIR=/src/proto

OUT_DIRS=${PROTO_TS_OUT_DIR}

PROTO_FILES := $(shell find $(shell pwd -P) -type f -name '*.proto')

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
	protoc -I=/proto $(PROTO_FILES) ${TS_PROTO_OPT}