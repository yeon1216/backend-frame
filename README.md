# backend-frame

# 1. Docker-Compose 실행

```bash
$ cd path/to/camerafi_server
$ docker-compose --env-file ./config/.env.dev up -d --build
```

# 2. 하나의 서비스만 재 실행

```bash
$ cd path/to/camerafi_server
$ docker-compose up -d --env-file ./config/.env.dev \
--force-recreate --no-deps --build help-center-nodejs
```
