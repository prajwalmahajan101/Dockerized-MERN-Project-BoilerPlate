FROM node:20


WORKDIR /app

COPY package.json .

RUN npm i

COPY tsconfig.json .
COPY prisma .
COPY src .

RUN npm run prisma -- generate


CMD ["npm","run", "start"]