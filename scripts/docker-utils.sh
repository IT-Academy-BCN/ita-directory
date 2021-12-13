#!/bin/bash
source utils.sh
ENV_FILE=$(git_root)/.env
loadEnv $ENV_FILE

launchPostgres() {
    echo "Starting PostgreSQL ..."
    docker run -it -d --rm \
        --name $DB_NAME \
        -e POSTGRES_PASSWORD=$DB_PASS \
        -e PGDATA=/var/lib/postgresql/data/pgdata \
        -v ita_diectory_postgres:/var/lib/postgresql/data \
        -p $DB_PORT:5432 \
        postgres:14.1-alpine
    timeout 90s "until docker exec $DB_NAME pg_isready ; do sleep 3 ; done"
}

launchRedis() {
    echo "Starting Redis ..."
    docker run -it -d --rm \
        --name $REDIS_NAME \
        -v ita_directory_redis_data:/data \
        -p $REDIS_PORT:6379 \
        redis:6.2-alpine \
        redis-server --save 60 1 --requirepass $REDIS_PASS --loglevel warning
}

stopContainers() {
    docker stop $DB_NAME $REDIS_NAME -t 10
}
