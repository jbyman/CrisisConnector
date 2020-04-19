docker-compose down

(cd react-app; ./build.sh)
docker-compose build

docker-compose up

docker exec -it covid-hackathon_db_1 psql -h 127.0.0.1 -p 5432 help_directory -U postgres -f createdb.sql
docker exec -it covid-hackathon_db_1 psql -h 127.0.0.1 -p 5432 help_directory -U postgres -f insert_dummy_data.sql
