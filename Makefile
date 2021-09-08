IMAGE_NAME = ita-frontend-container:dev

build: ## build docker image
	docker build -t $(IMAGE_NAME) .

dev: ## launch docker dev
	if [docker image ls -a "$$IMAGE_NAME" | grep -Fq "$$IMAGE_NAME" 1>/dev/null]; then \
		echo "could found image $$IMAGE_NAME..."; \
	fi; \
	docker run -it --rm \
	-v ${PWD}:/app \
	-v /app/node_modules \
	-p 3001:3000 \
	-e CHOKIDAR_USEPOLLING=true \
	$(IMAGE_NAME)