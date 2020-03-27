docker-compose down

# Build All Docker Images
docker-compose build

# Run Flask App and Postgres
docker-compose up

# Create tables and insert dummy data
docker exec -it covid-hackathon_db_1 psql -h 127.0.0.1 -p 5432 help_directory -U postgres -f createdb.sql
docker exec -it covid-hackathon_db_1 psql -h 127.0.0.1 -p 5432 help_directory -U postgres -f insert_dummy_data.sql
