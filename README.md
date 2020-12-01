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

![Architecture](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FTxTdG%2FbtqOSyGYmEf%2FwIUgvw78gX6oI0n9mQ7Bo1%2Fimg.png)
