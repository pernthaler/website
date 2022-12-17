//go:build windows

package terminal

import (
	"syscall"
	"unsafe"
)

var (
	kernel32            = syscall.NewLazyDLL("Kernel32.dll")
	SetConsoleTitleProc = kernel32.NewProc("SetConsoleTitleW")
)

func SetConsoleTitle(title string) {
	ptr, _ := syscall.UTF16PtrFromString(title)
	SetConsoleTitleProc.Call(uintptr(unsafe.Pointer(ptr)))
}
