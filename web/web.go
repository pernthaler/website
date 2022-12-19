package web

import "embed"

//go:embed lang
var Lang embed.FS

//go:embed static
var Static embed.FS

//go:embed template
var Template embed.FS
