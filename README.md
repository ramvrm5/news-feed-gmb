# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### create file .env and paste all data from .env_local

## To run locally without docker

In the project directory, you can run:

### `npm instal`
### `npm start`

## To run locally with docker

In the project directory, you can run:

### `install docker desktop and setup`
### `docker build -t my-react-app:latest .`
### ` docker run -d -p 8000:3000 --name my-react-app-container my-react-app:latest`
### Once the container is running, you can access your React app in your web browser by visiting 
`http://localhost:8000` (or the host port you mapped).

