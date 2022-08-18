package main

import (
	"embed"
	"fmt"
	"io/fs"
	"net/http"
	"os"

	"github.com/Pernthaler/Website/server/console"
	"github.com/common-nighthawk/go-figure"
	"github.com/urfave/cli/v2"
)

//go:embed dist/*
var dist embed.FS

func main() {
	app := &cli.App{
		Name:    "website",
		Usage:   "Website",
		Version: "2.3.2",
		Action:  Execute,
	}

	err := app.Run(os.Args)
	if err != nil {
		fmt.Println(err)
	}
}

func Execute(*cli.Context) error {
	fsys, _ := fs.Sub(dist, "dist")
	fs := http.FileServer(http.FS(fsys))
	http.Handle("/", fs)

	console.SetConsoleTitle("Website")
	figure.NewFigure("Website", "doom", true).Print()
	fmt.Println()
	fmt.Println("Listening at :8080")

	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		return err
	}
	return nil
}
