# E-commerce Back End

## Description

This application uses Express.js API and mySQL database in order to create an E-Commerce backend. Sequelize is used to interact with the MySQL database. RESTful APIs were also used in order to utilize CRUD functionality. The API routes can be used to:

- Create categories, products, tags
- View categories, products, tags
- Establish associations between the different entities
- Update categories, products, tags
- Delete entries from the database

## Screenshot

GET request for categories using Insomnia
![GET_CATEGORIES](/screenshots/GET_CATEGORIES.png)

## Installation

1. git clone the repo to your local machine.
2. type "npm i" in order to install all of the dependencies, which include mysql2, sequelize, express, dotenv.
3. place a .env file in the root directory of the project in order to connect to your MySQL database. The file structure should look like this:
   > - DB_NAME= 'ecommerce_db'
   > - DB_USER=''
   > - DB_PASSWORD= ''

## Demo

Here is a link to video illustrating the GET, POST, PUT, and DEL for Products, Tags, and Categories in Insomnia. https://watch.screencastify.com/v/pwYqdPKsZw5RUaTkuCBU

## Contact

github username: suzakijun1
email: dyong1997@gmail.com
