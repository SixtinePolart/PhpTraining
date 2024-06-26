DOCKER_COMP = docker compose
DOCKER = docker
up: ## Start the docker hub in detached mode (no logs)
	@$(DOCKER_COMP) up -d

down:
	@$(DOCKER_COMP) down --remove-orphans

hello:
	@$(DOCKER) exec -it phptraining-php-1 php app/app/index.php

php:
	@$(DOCKER) exec -it phptraining-php-1 php