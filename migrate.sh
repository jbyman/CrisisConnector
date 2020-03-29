name=$1
if [ -z $name ]; then
    echo "Usage of this script: migrate.sh {upgrade, migrate}"
elif [ "$name" = "upgrade" ]; then
    pip install -r requirements.txt
    (cd migrate; python3 migrate.py db upgrade) 
else
    pip install -r requirements.txt
    (cd migrate; python3 migrate.py db migrate) 
fi
