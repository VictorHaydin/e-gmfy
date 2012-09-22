@echo off
start mongod --dbpath d:\db\mongo
cd src
start lcm server
cd ..
chrome http://localhost:3000