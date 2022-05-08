package main

import (
	"fmt"

	_ "github.com/gogo/protobuf/gogoproto"
	_ "github.com/gogo/protobuf/types"
	"github.com/spf13/cobra"
)

func main() {
	rootCmd := cobra.Command{}
	fmt.Println("Hello, world.", rootCmd.Use)
}
