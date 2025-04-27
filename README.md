# About

This is a simple [React](https://react.dev/learn) app created with [vite](https://vite.dev/guide) to test out new [tailwindcss v4 features and changes](https://tailwindcss.com/blog/tailwindcss-v4).

## Starting the development server

This repository has a [docker-compose file](./docker-compose.yml) that sets a node server for testing convenience.
If you have docker installed, you can run it with command below:

```sh
docker compose up
```

Otherwise, the requirements to run is just the [NodeJS]() itself. Install the app dependences and run with:

```sh
npm install
npm run dev -- --host
```