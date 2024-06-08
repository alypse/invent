## Welcome to the Inventory management app!

A few helpful Docker commands


```
docker build -t invent .
```
```
docker build --no-cache -t invent .
```
```
docker images
```
```
docker ps
```
```
docker run --name inventory-app -p 8080:8080 -d invent:latest
```