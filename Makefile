ORG := github.com/r2d4
PROJECT := containerscript
BINARY ?= cs

ALPINE_VERSION=3.14
GO_VERSION=1.18
NODE_VERSION=17

DOCKER_BUILD = docker buildx build
DOCKER_BUILD_PLATFORM ?= --platform linux/arm64
DOCKER_BUILD_ARGS ?= 
DOCKER_BUILD_ARGS += --build-arg ALPINE_VERSION=$(ALPINE_VERSION)
DOCKER_BUILD_ARGS += --build-arg GO_VERSION=$(GO_VERSION)
DOCKER_BUILD_ARGS += --build-arg NODE_VERSION=$(NODE_VERSION)

.PHONY: proto
proto: $(PROTO_FILES)
	$(info $(PWD))
	$(DOCKER_BUILD) --load -t proto-builder $(DOCKER_BUILD_ARGS) -f proto/Dockerfile .
	docker run \
		-w /proto \
		-v $(PWD)/src:/src \
		--user "$(shell id -u):$(shell id -g)" \
		proto-builder make proto-in-docker