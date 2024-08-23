## Push new changes (from 2024)

just push to github -> will be automatically deployed :) 


### To link the local image to google registry
docker tag benjictln/my_website eu.gcr.io/personal-website-249708/my_website

### To push the image
docker push eu.gcr.io/personal-website-249708/my_website

## For a new deploy
* docker-compose -f docker-compose.prod.yml build
* docker tag benjictln/my_website eu.gcr.io/personal-website-249708/my_website
* docker push eu.gcr.io/personal-website-249708/my_website

## To run locally
* docker-compose -f docker-compose.prod.yml build
* docker run -p 443:443 -it benjictln/my_website



## the react theme comes from:
https://github.com/tbakerx/react-resume-template
