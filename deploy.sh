docker-compose -f docker-compose.prod.yml build
docker tag benjictln/my_website eu.gcr.io/personal-website-249708/my_website
docker push eu.gcr.io/personal-website-249708/my_website
