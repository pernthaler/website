package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/filesystem"
	"github.com/pernthaler/website/web"
	"github.com/urfave/cli/v2"
)

func main() {
	var count int
	var language string

	cli := &cli.App{
		Name:    "website",
		Usage:   "sebastian.pernthaler.me",
		Version: "3.0.0",

		Flags: []cli.Flag{
			&cli.BoolFlag{
				Name:  "no-gui",
				Usage: "disable the gui",
				Count: &count,
			},
			&cli.StringFlag{
				Name:        "matomo",
				Aliases:     []string{"m"},
				Value:       "url",
				Usage:       "set the matomo url",
				Destination: &language,
			},
		},
		Action: func(*cli.Context) error {
			fmt.Println("boom! I say!")
			return nil
		},
	}

	if err := cli.Run(os.Args); err != nil {
		log.Fatal(err)
	}

	server := fiber.New()

	server.Use("/", filesystem.New(filesystem.Config{
		Root:       http.FS(web.Static),
		PathPrefix: "static",
	}))

	// TODO: check for open port
	server.Listen(":8080")

	// TODO: webview
}
