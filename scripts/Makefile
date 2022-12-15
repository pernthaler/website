.PHONY: all build dev docker test clean

all: clean build

build:
ifeq ($(OS), Windows_NT)
	if not exist bin ( mkdir bin )
#	TODO
	windres -o bin/resource.syso build/windows/resource.rc
	go build -tags desktop,production -ldflags "-w -s -H windowsgui" -o bin/website.exe cmd/website/main.go
	upx --best --lzma bin/website.exe
else
	mkdir -p bin
	go build -tags desktop,production -ldflags "-w -s" -o bin/website cmd/website/main.go
ifneq ($(UNAME_S), Darwin)
#	TODO
#	https://github.com/upx/upx/issues/612
#	https://github.com/upx/upx/issues/601
	upx --best --lzma bin/website
endif
endif

docker:
	docker-compose -f build/docker/docker-compose.yml up --build

dev:
	go run -tags dev -gcflags "all=-N -l" cmd/website/main.go

test:
	$(MAKE) docker
	docker-compose -f test/docker-compose.yml up --build

clean:
ifeq ($(OS), Windows_NT)
	if exist bin ( rmdir /s /q bin)
else
	if [ -d bin ]; then rm -r bin; fi
endif