package web

import "embed"

//go:embed all:static
var Static embed.FS

//go:embed all:template
var Template embed.FS
