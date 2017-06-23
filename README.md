
docker build -t nodeapp_v510 .


docker run --name {CONTAINERNAME} -v 'pwd':/usr/src/app/ -p 49160:3000 -d {IMAGENAME}
e.g, docker run --name nodeapp -v 'pwd':/usr/src/app/ -p 49160:3000 -d nodeapp_v483
# docker-nodejs
