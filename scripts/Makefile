.PHONY: all build dev docker test clean

ifeq ($(OS), Windows_NT)
SHELL = cmd
endif

all: clean build

build:
ifeq ($(OS), Windows_NT)
	$(MAKE) bin\website.exe
else
	$(MAKE) bin/website
endif

bin/website:
	mkdir -p bin
	CGO_ENABLED=0 go build -ldflags "-s -w" -o bin ./...
#	TODO: https://github.com/upx/upx/issues/612
ifneq ($(shell uname), Darwin)
	upx --best --lzma $@
endif

bin\website.exe:
	if not exist bin ( mkdir bin )
	$(MAKE) cmd\website\resource.syso
	go build -ldflags "-s -w" -o bin .\...
	upx --best --lzma $@

dev:
ifeq ($(OS), Windows_NT)
	if not exist bin ( mkdir bin )
	air --build.cmd "go build -o bin .\..." --build.bin .\bin\website.exe
else
	mkdir -p bin
	air --build.cmd "go build -o bin ./..." --build.bin ./bin/website
endif

cmd\website\resource.syso:
	windres -o $@ build\windows\resource.rc

docker:
	docker-compose -f test/docker-compose.yml up --build

clean:
ifeq ($(OS), Windows_NT)
	if exist bin ( rmdir /s /q bin)
	if exist cmd\website\resource.syso ( del cmd\website\resource.syso )
else
	if [ -d bin ]; then rm -r bin; fi
endif