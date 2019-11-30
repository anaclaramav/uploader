#!/bin/bash
apt-get update
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
apt-get install curl
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
apt-get install nodejs
