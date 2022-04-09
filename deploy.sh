#!/bin/bash

git checkout deploy
git merge master

# build the static version of the website
./build.sh

git add .
git commit -m "Deploy: $(ruby -e 'puts Time.now')"
git push
git checkout master
