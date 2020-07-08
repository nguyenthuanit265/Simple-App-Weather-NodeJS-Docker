* Install Docker Desktop

* Build Docker image and container
```shell
docker build . -t <username>/<name app>
docker build -t <name app> .
```
* Run Docker
```shell
docker run -p <port of device>:<port docker container> <username>/<name app>
docker run --name <name container custom> -p <port of device>:<port docker container> -d <name image>
```
* Show docker container
```shell
docker ps -a
```
* Stop docker container
```shell
docker stop <container ID or name container>
```
* Delete docker container
```shell
docker rm <container ID or name container>
```
