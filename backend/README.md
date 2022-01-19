# Dockerized Node/Express/Mongoose app

## Build

Example (replace `benoithubert/express-mongoose-dev` by anything that suits you, e.g. `<docker-hub-username>/express-mongoose-dev`):

```
docker build -t benoithubert/express-mongoose-dev .
```

## Run

Run the container, binding local `src/` folder to `/app/src` in container (replace image name by yours):

```
docker run -p 4400:4400 --mount "type=bind,src=$(pwd)/src,dst=/app/src" benoithubert/express-mongoose-dev
```

* `-p 4400:4400`: 1st port is on the **host**, 2nd port in the **container**. Port 4400 on the container will be exposed as port 4400 on the host.
* `--mount "type=bind,src=$(pwd)/src,dst=/app/src"`: "bind" local directory (`src` under the current directory) to `/app/src` in container
* `benoithubert/express-mongoose-dev`: image name

## Nodemon command explained

In `dev` script (see `package.json`):

```
nodemon -e ts -x ts-node --legacy-watch src/index.ts
```

* `-e ts`: watch TypeScript
* `-x ts-node`: execute with `ts-node` instead of `node`
* `--legacy-watch` or `-L`: detect file changes (in Docker container)