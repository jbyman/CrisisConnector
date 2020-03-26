
# Build Flask App Docker Image
docker  build --no-cache -t covid-hackathon:latest .

# Run Flask App and Postgres
docker-compose up

# Create tables and insert dummy data
psql -h 127.0.0.1 -p 5432 help_directory -U postgres -f createdb.sql
psql -h 127.0.0.1 -p 5432 help_directory -U postgres -f insert_dummy_data.sql
