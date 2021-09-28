.PHONY: build rebuild dev rebuild-api

dev:
	rm -f .env
	cp .env.development .env

build:dev ## Build docker image
	docker-compose build

rebuild:clean build start ## Rebuild docker image

rebuild-api:
	docker-compose up -d --no-deps --build ita-api