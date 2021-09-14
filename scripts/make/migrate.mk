SOURCE := $(shell git rev-parse --show-toplevel)

.PHONY: commit migrate

commit: ## Commit db changes
	cd $(SOURCE)/migrate && npm run commit && cd $(SOURCE)

migrate: ## Execute commits in production/dev
	cd $(SOURCE)/migrate && npm run migrate && cd $(SOURCE)