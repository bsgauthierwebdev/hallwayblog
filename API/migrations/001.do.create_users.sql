CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(45) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(45) NOT NULL,
    img VARCHAR(1000)
);