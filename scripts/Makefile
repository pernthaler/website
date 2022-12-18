.PHONY: all build dev docker test clean

all: clean build

build:
ifeq ($(OS), Windows_NT)
	$(MAKE) bin\website.exe
else
	$(MAKE) bin/website
endif

bin\website.exe:
	if not exist bin ( mkdir bin )
	$(MAKE) cmd\website\resource.syso
	go build -ldflags "-s -w" -o bin .\...
	upx --best --lzma $@

bin/website:
	mkdir -p bin
	go build -ldflags "-s -w" -o bin ./...
#	TODO: https://github.com/upx/upx/issues/612
ifneq ($(shell uname), Darwin)
	upx --best --lzma $@
endif

dev:
ifeq ($(OS), Windows_NT)
	$(MAKE) cmd/website/resource.syso
endif
	go run ./... $(args)

cmd\website\resource.syso:
	windres -o $@ build\windows\resource.rc

docker:
	docker-compose -f build/docker/docker-compose.yml up --build

test:
	$(MAKE) docker
	docker-compose -f test/docker-compose.yml up --build

clean:
ifeq ($(OS), Windows_NT)
	if exist bin ( rmdir /s /q bin)
	if exist cmd\website\resource.syso ( del cmd\website\resource.syso )
else
	if [ -d bin ]; then rm -r bin; fi
endif