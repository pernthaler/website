package web

import "embed"

// go:embed all:layout
var Layout embed.FS

// go:embed all:static
var Static embed.FS

// go:embed all:template
var Template embed.FS
