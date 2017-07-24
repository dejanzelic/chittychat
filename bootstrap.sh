#!/usr/bin/env bash

export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y curl
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
apt-get install -y nodejs
cd /vagrant && npm install 
