# ***Basic Structure For MERN + TypeScript + Prisma ORM + TailwindCSS Project***

## Development

- install docker and docker-compose
- Start Mongo Atlas Account and Create a Cluster and User
- Get MongoDb connection URL
- Clone the repo
```git clone https://github.com/prajwalmahajan101/Dockerized-MERN-Project-BoilerPlate.git```
or by any other way.
- Create a backend.dev.env by copying given sample file in ```./envs``` and paste the MongoDB connection URL you got from Atlas in place of placeholder
- Run following commands:
  - ```docker compose run --rm npm i```
  - ```docker compose run --rm npm run primsa -- db push```
  - ```docker compose run --rm f-npm i```
- This will install the node_modules
- To host the Project you can run in development ```docker compose up -d nginx``` 
- To update the deployment use same command after making changes changes ```docker compose up -d nginx```

## Production
- Create a backend.prod.env in the same way as in development and add production database URL with empty database
- Run following commands:
    - ```docker compose -f "docker-compose.prod.yaml" up```
- This creates a build for production like environment.
