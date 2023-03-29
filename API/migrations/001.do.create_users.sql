CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(45) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    pw VARCHAR(45) NOT NULL,
    img VARCHAR(1000)
);

-- Need to figure out how to delete users without deleting related posts.

-- How do we prevent users who violate terms from creating a new user with the original email?