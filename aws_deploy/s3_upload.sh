#/bin/bash
aws s3 --recursive cp ./ s3://appsecusa-7d2b277154db/source/chitty_chat --exclude "node_modules/*" --exclude "package-lock.json"
