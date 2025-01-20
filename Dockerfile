FROM node:23.6-alpine3.20

COPY package.json .
COPY package-lock.json .

RUN npm i

WORKDIR /src

ENTRYPOINT ["npx", "tailwindcss", "-i", "./static/css/input.css", "-o", "./static/dist/output.css", "--watch", "--verbose"]
