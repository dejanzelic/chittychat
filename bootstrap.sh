#!/usr/bin/env bash

#update and prepare dependencies 
export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y curl

# Install Node
if command -v node; then
	echo "Node is already installed"
else
	curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
	apt-get install -y nodejs
fi

if ! [ -L /vagrant/node_modules ]; then
	cd /vagrant && npm install 
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
