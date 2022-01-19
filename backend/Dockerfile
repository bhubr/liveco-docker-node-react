FROM node:lts-alpine

WORKDIR /app

COPY package*.json .
COPY tsconfig.json .

RUN npm i

# Remplacé par un "bind" entre le dossier src/ de l'hôte
# et le dossier /app/src du conteneur
# COPY src/ src

CMD npm run dev
