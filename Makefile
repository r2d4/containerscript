ORG := github.com/r2d4
PROJECT := containerscript
BINARY ?= cs

BUILD_DIR ?= _output

ALPINE_VERSION=3.14
GO_VERSION=1.18
NODE_VERSION=17

DOCKER_BUILD = docker buildx build
DOCKER_BUILD_PLATFORM ?= --platform linux/arm64
DOCKER_BUILD_ARGS ?= 
DOCKER_BUILD_ARGS += --build-arg ALPINE_VERSION=$(ALPINE_VERSION)
DOCKER_BUILD_ARGS += --build-arg GO_VERSION=$(GO_VERSION)
DOCKER_BUILD_ARGS += --build-arg NODE_VERSION=$(NODE_VERSION)

GO ?= $(shell which go)
GOOS ?= $(if $(GO),$(shell $(GO) env GOOS),)
GOARCH ?= $(if $(GO),$(shell $(GO) env GOARCH),)
GOBIN ?= $(HOME)/go/bin
CGO_ENABLED ?= 0

BUILD_PACKAGE ?= $(ORG)/$(PROJECT)/cmd/$(BINARY)

GO_GCFLAGS := "all=-trimpath=$(PWD)"
GO_ASMFLAGS := "all=-trimpath=$(PWD)"

GO_BUILD_DIR = $(BUILD_DIR)/bin/$(GOOS)_$(GOARCH)

GO_SRC_FILES :=  $(if $(GO),$(shell find . -type f -name '*.go' -not -name "*_test.go" -not -path "./infra/*" -not -path "./highline.dev/*"),)
GO_ENV=GOOS=$(GOOS) GOARCH=$(GOARCH) CGO_ENABLED=$(CGO_ENABLED)

$(GOBIN)/$(BINARY): $(GO_BUILD_DIR)/$(BINARY)
	cp -f $(GO_BUILD_DIR)/$(BINARY) $(GOBIN)/$(BINARY)

$(GO_BUILD_DIR)/$(BINARY): $(GO_SRC_FILES) $(BUILD_DIR) go.mod go.sum
	$(GO_ENV) $(GO) build -o $@ $(BUILD_PACKAGE)

$(BUILD_DIR)%:
	mkdir -p $@

$(BUILD_DIR):
	mkdir -p $@


.PHONY: proto
proto: $(PROTO_FILES)
	$(info $(PWD))
	$(DOCKER_BUILD) --load -t proto-builder $(DOCKER_BUILD_ARGS) -f proto/Dockerfile .
	docker run \
		-w /proto \
		-v $(PWD)/pkg:/pkg \
		-v $(PWD)/cs:/cs \
		--user "$(shell id -u):$(shell id -g)" \
		proto-builder make proto-in-docker