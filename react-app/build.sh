## TODO: Make this a build option
# npm i;
# npm run build;

docker build --no-cache -t covid-hackathon-ui:latest .
  
docker run -p 3000:80 covid-hackathon-ui:latest 