# Production Environment

## Operating System

### Required Packages
- mysql
- yarn
- nvm (https://tecadmin.net/how-to-install-nvm-on-debian-10/) => Current or LTS Version

### Optional Packages
- apache2
- nginx

## NodeJS
- `nvm install node` or `nvm install --lts`
- `nvm use node` or `nvm use --lts`
- Navigate to the project folder
- run `yarn install --production`

## Database

### Configuration
- Create a `root` user with the password `toor`
- Create a new database called `nextjs_prisma` (`CREATE DATABASE nextjs_prisma;`)
- Try and check the connection to the database

### Migrations
- run in the project folder `yarn prisma generate`
- run in the project folder `yarn prisma migrate deploy`
- check if the tables are created in the database

## Start the application
- run `yarn run build`
- run `yarn run start`
- open the browser and navigate to `http://localhost:3000`
