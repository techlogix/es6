## Run Ubuntu in interactive mode
docker run -it ubuntu

## Create a Docker Image - with code maybe.
$ docker commit -a "Rohit Sood &lt;techlogix@gmail.com&gt;" -m "Paint-By-Numbers" 611456bda54e paint-by-numbers:0.1

## push image out

$ docker tag b339613bac8b techlogix/paint-by-numbers  
$ docker rmi paint-by-numbers
$ docker push techlogix/paint-by-numbers

## Delete all docker containers

$docker rm $(docker ps -a -q)

Delete all docker images

docker rmi $(docker images -q)


## Investor
Keith Stucker
Money Guy - Park Ahead Board.

Kirtin Springer.
YoBo Adviser.

Online Bank Schemes - small , automated.
Issue: the way the language on the software.
15 minutes of advice.

Rick Parker, COO. Friday morning.
