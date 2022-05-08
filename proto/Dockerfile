# syntax=docker/dockerfile:experimental
ARG ALPINE_VERSION
ARG GO_VERSION

FROM golang:${GO_VERSION}-alpine${ALPINE_VERSION} as builder
WORKDIR /build

RUN apk add --update protoc make nodejs curl npm git
RUN npm install -g ts-proto@v1.112.1

RUN --mount=type=cache,target=/go/pkg \
    --mount=type=cache,target=/root/.cache/go-build \
    go install \
    google.golang.org/protobuf/cmd/protoc-gen-go@v1.28

RUN --mount=type=cache,target=/go/pkg \
    --mount=type=cache,target=/root/.cache/go-build \
    go install \
    google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2

COPY proto /proto

