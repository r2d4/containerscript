package main

import (
	"context"
	"log"

	"github.com/moby/buildkit/frontend/gateway/client"
	"github.com/moby/buildkit/frontend/gateway/grpcclient"

	"github.com/moby/buildkit/util/appcontext"
)

func main() {

}

func run() error {
	if err := grpcclient.RunFromEnvironment(appcontext.Context(), build); err != nil {
		log.Fatalf("fatal error: %s", err)
		panic(err)
	}
}

func build(ctx context.Context, c client.Client) (*client.Result, error) {

	return nil, nil
}
