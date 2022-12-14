package main

import (
	"net"
	"net/http"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/filesystem"
	"github.com/pernthaler/website/web"
)

func main() {
	// TODO: check for open port

	conn, error := net.Dial("udp", "1.1.1.1:80")
	if error != nil {
		panic(error)
	}

	defer conn.Close()
	//ip := conn.LocalAddr().(*net.UDPAddr).IP

	app := fiber.New()

	app.Use("/", filesystem.New(filesystem.Config{
		Root:       http.FS(web.Static),
		PathPrefix: "static",
	}))

	/*
		go wails.Run(&options.App{
			Title:     fmt.Sprintf("website [%s:8080]", ip),
			Width:     1280,
			Height:    1024,
			MinWidth:  320,
			MinHeight: 256,
			AssetServer: &assetserver.Options{
				Handler: adaptor.FiberApp(app),
			},
			Windows: &windows.Options{
				DisableWindowIcon: true,
				Theme:             windows.Dark,
			},
		})
	*/

	app.Listen(":8080")
}
