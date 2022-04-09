#!/bin/zsh

echo switch directory to site folder..
cd ./site

echo Build & export..
npm run export

echo Moving files to docs folder..
cp -R ./out/* ../

echo Moving to root directory
cd ..

echo Done.
