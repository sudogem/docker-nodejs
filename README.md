# docker-nodejs

docker build -t nodeapp_v510 .

docker run --name {CONTAINERNAME} -v 'pwd':/var/www/app/nodeapp -p 49160:3000 -d {IMAGENAME}
e.g, docker run --name nodeapp1 -v 'pwd':/var/www/app/nodeapp -p 49160:3000 -d nodeapp_v510

