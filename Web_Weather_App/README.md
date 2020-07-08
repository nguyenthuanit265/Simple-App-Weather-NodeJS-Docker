* Install Docker Desktop

* Build Docker image and container
```shell
docker build . -t <username>/<name app>
```
* Run Docker
```shell
docker run -p <port of device>:<port docker container> <username>/<name app>
```
* Show docker container
```shell
docker ps -a
```
* Stop docker container
```shell
docker stop <container ID>
```
* Delete docker container
```shell
docker rm <container ID>
```
