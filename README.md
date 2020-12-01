# backend-frame

# 1. Docker-Compose 실행

```bash
$ cd path/to/backend-frame
$ docker-compose --env-file ./config/.env.dev up -d --build
```

# 2. 하나의 서비스만 재 실행

```bash
$ cd path/to/backend-frame
$ docker-compose up -d --env-file ./config/.env.dev \
--force-recreate --no-deps --build help-center-nodejs
```
# 3. Architecture
![Architecture](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FTxTdG%2FbtqOSyGYmEf%2FwIUgvw78gX6oI0n9mQ7Bo1%2Fimg.png)

# LICENSE
MIT License

Copyright (c) 2020 yeon1216

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
