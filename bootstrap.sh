#!/usr/bin/env bash

#update and prepare dependencies 
export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y curl

app_home="/vagrant"


# Install Node
if command -v node; then
	echo "Node is already installed"
else
	curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
	apt-get install -y nodejs
fi

if ! [ -L $app_home/node_modules ]; then
	cd $app_home && npm install 
fi

# install MySQL 
# @TODO: remove password from command
if command -v mysql; then
	echo "mysql is already installed"
else
	debconf-set-selections <<< 'mysql-server mysql-server/root_password password MySuperPassword'
	debconf-set-selections <<< 'mysql-server mysql-server/root_password_again password MySuperPassword'
	apt-get install -y mysql-server
fi

if mysql -u root -pMySuperPassword -e "USE chittychat"; then
	echo "db already created"
else
	mysql -u root -pMySuperPassword < $app_home/db_create.sql
fi

npm install -g pm2
pm2 start $app_home/app.js

