CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    descr VARCHAR(1000) NOT NULL,
    content VARCHAR(20000) NOT NULL,
    img VARCHAR(1000),
    created TIMESTAMPTZ DEFAULT now() NOT NULL,
    userid INT 
        REFERENCES users(id) ON DELETE CASCADE NOT NULL
);

-- Need to figure out how to delete users without deleting related posts.