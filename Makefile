.PHONY: all client server client-dev server-dev clean

all: client server

client:
	cd client && pnpm install
	cd client && pnpm build

server:
ifeq ($(OS), Windows_NT)
	cd server && windres -o resource.syso assets/resource.rc
	cd server && go build -o Website.exe
else
	cd server && go build -o website
endif

client-dev:
	cd client && pnpm install
	cd client && pnpm dev

server-dev:
	cd server && go run main.go

docker:
	docker-compose up --build

clean:
ifeq ($(OS), Windows_NT)
	if exist client\node_modules	( rmdir /s /q client\node_modules	)
	if exist server\dist			( rmdir /s /q server\dist 			)
	if exist server\resource.syso	( del server\resource.syso			)
	if exist server\Website.exe		( del server\Website.exe			)
else
	if [ -d client/node_modules ];	then rm -r client/node_modules;	fi
	if [ -d server/dist ];			then rm -r server/dist;			fi
	if [ -f server/website ];		then rm server/website;			fi
endif