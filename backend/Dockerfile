FROM node:20


WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

RUN npm run prisma -- generate


CMD ["npm","run", "prod"]