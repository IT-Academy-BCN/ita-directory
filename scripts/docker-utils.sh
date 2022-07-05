#!/bin/bash
source utils.sh
ENV_FILE=$(git_root)/.env.development
loadEnv "$ENV_FILE"

launchPostgres() {
    echo "Starting PostgreSQL ..."
    docker run -it -d --rm \
        --name $DB_NAME \
        -e POSTGRES_PASSWORD=$DB_PASS \
        -e PGDATA=/var/lib/postgresql/data/pgdata \
        -v $DB_NAME:/var/lib/postgresql/data \
        -p $DB_PORT:5432 \
        postgres:14.1-alpine
    timeout 90s "until docker exec $DB_NAME pg_isready ; do sleep 3 ; done"
}

launchRedis() {
    echo "Starting Redis ..."
    docker run -it -d --rm \
        --name $REDIS_NAME \
        -v $REDIS_NAME:/data \
        -p $REDIS_PORT:6379 \
        redis:6.2-alpine \
        redis-server --save 60 1 --requirepass $REDIS_PASS --loglevel warning
}

cleanPostgres() {
    docker stop $DB_NAME -t 10 || true
    docker rm -v $DB_NAME || true
    docker volume rm $DB_NAME || true
}

cleanRedis() {
    docker stop $REDIS_NAME -t 10 || true
    docker rm -v $REDIS_NAME || true
    docker volume rm $REDIS_NAME || true
}
