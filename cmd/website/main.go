package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/common-nighthawk/go-figure"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/filesystem"
	"github.com/gofiber/template/handlebars"
	"github.com/nicksnyder/go-i18n/v2/i18n"
	"github.com/pernthaler/website/web"
	"github.com/urfave/cli/v2"
	"golang.org/x/text/language"
	"gopkg.in/yaml.v2"
)

func main() {
	var matomo_url string
	var matomo_site_id int

	app := &cli.App{
		Name:    "website",
		Usage:   "sebastian.pernthaler.me",
		Version: "3.0.3",

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
	// TODO: SetWindowTitle("website")

	figure.NewFigure("website", "doom", true).Print()
	fmt.Println()
	fmt.Println("Listening at :8080")

	engine := handlebars.NewFileSystem(http.FS(web.Template), ".hbs")
	app := fiber.New(fiber.Config{
		DisableStartupMessage: true,
		Views:                 engine,
		ViewsLayout:           "template/layout",
	})

	bundle := i18n.NewBundle(language.English)
	bundle.RegisterUnmarshalFunc("yml", yaml.Unmarshal)
	bundle.LoadMessageFileFS(web.Lang, "lang/en.yml")
	bundle.LoadMessageFileFS(web.Lang, "lang/de.yml")

	app.Get("/", func(c *fiber.Ctx) error {
		localizer := i18n.NewLocalizer(bundle, c.Get("Accept-Language"))
		description, tag, _ := localizer.LocalizeWithTag(&i18n.LocalizeConfig{MessageID: "Description"})
		return c.Render("template/index", fiber.Map{
			"tag":         tag.String(),
			"description": description,
			"source":      localizer.MustLocalize(&i18n.LocalizeConfig{MessageID: "Source"}),
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
