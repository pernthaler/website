package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/filesystem"
	"github.com/gofiber/template/html"
	"github.com/pernthaler/website/web"
	"github.com/urfave/cli/v2"
)

func main() {
	var matomo_url string
	var matomo_site_id int

	app := &cli.App{
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

	if err := app.Run(os.Args); err != nil {
		log.Fatal(err)
	}
}

func action(*cli.Context) error {
	engine := html.NewFileSystem(http.FS(web.Template), ".html")
	app := fiber.New(fiber.Config{
		Views:       engine,
		ViewsLayout: "template/layout",
	})

	app.Get("/", func(c *fiber.Ctx) error {
		return c.Render("template/index", fiber.Map{
			"hello": "world",
		})
	})

	app.Use("/", filesystem.New(filesystem.Config{
		Root:       http.FS(web.Static),
		PathPrefix: "static",
	}))

	// TODO: check for open port
	app.Listen(":8080")

	// TODO: webview
	return nil
}
