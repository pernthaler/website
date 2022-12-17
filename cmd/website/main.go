package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/filesystem"
	"github.com/pernthaler/website/web"
	"github.com/urfave/cli/v2"
)

func main() {
	var matomo_url string
	var matomo_site_id int

	cli := &cli.App{
		Name:    "website",
		Usage:   "sebastian.pernthaler.me",
		Version: "3.0.0",

		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:        "matomo-url",
				Usage:       "set the matomo url",
				Destination: &matomo_url,
			},
			&cli.IntFlag{
				Name:        "matomo-site-id",
				Value:       1,
				Usage:       "set the matomo site id",
				Destination: &matomo_site_id,
			},
		},
		Action: action,
	}

	if err := cli.Run(os.Args); err != nil {
		log.Fatal(err)
	}
}

func action(*cli.Context) error {
	server := fiber.New()

	server.Use("/", filesystem.New(filesystem.Config{
		Root:       http.FS(web.Static),
		PathPrefix: "static",
	}))

	// TODO: check for open port
	server.Listen(":8080")

	// TODO: webview
	return nil
}
