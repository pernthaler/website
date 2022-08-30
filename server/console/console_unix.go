//go:build !windows

package console

import "fmt"

func SetConsoleTitle(title string) {
	fmt.Printf("\033]0;%v\007", title)
}
