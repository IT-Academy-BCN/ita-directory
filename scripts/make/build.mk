.PHONY: build rebuild dev

dev:
	rm -f .env
	cp .env.development .env

build: ## Build docker image
	docker-compose build

rebuild:clean build start ## Rebuild docker image