## Run container in interactive mode
docker run -it ubuntu

## How to make changes to a docker image after an inital pull

$ docker commit -a "Rohit Sood &lt;techlogix@gmail.com&gt;" -m "comments" container-id xxxx/yyy
## push image out
$ docker tag container-id techlogix/container-name

## How to remove images?  
$ docker rmi image-name
## How to push image name
$ docker push techlogix/image-name

## How do you delete all docker containers

$docker rm $(docker ps -a -q)

## How do you Delete all docker images

docker rmi $(docker images -q
