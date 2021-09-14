.PHONY: build rebuild

build: ## Build docker image
	docker-compose build

rebuild:clean build start ## Rebuild docker image