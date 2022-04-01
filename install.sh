#!/usr/bin/env bash

if which node >/dev/null; then
    echo "node installed, skipping..."
else
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
    apt-get install -y nodejs
fi

if which psql >/dev/null; then
    echo "postgresql installed, skipping..."
else
    apt install postgresql
fi

service postgresql start

cd front
echo "Installing frontend dependencies"
npm install
echo "Put the api URL WITH the slash at the end (https://www.mydomain.com/, http://localhost:5800/)"
read api_URL
env_var_name="REACT_APP_URL_API="
env_var_endpoint="api/"
echo "$env_var_name$api_URL$env_var_endpoint" >.env
echo "Building frontend"
npm run build

cd ..
cd api
echo "Installing api dependencies"
echo "Input PostgreSQL host:"
read postgres_host
echo "Input PostgreSQL port:"
read postgres_port
echo "Input PostgreSQL user:"
read postgres_user
echo "Input PostgreSQL password:"
read postgres_password
echo "Input PostgreSQL database:"
read postgres_db
echo "POSTGRES_HOST=$postgres_host" >> .env
echo "POSTGRES_PORT=$postgres_port" >> .env
echo "POSTGRES_USER=$postgres_user" >> .env
echo "POSTGRES_PASSWORD=$postgres_password" >> .env
echo "POSTGRES_DATABASE=$postgres_db" >> .env
npm install
echo "Building api"
npm run build
