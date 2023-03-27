TRUNCATE users, posts RESTART IDENTITY CASCADE;

INSERT INTO users (username, email, pw, img)
VALUES
    ('testuser', 'test@test.com', 'testpassword', 'testimageurl'),
    ('testuser2', 'test2@test.com', 'testpassword2', 'testimageurl2');

INSERT INTO posts (title, descr, content, img, userid)
VALUES  
    (
        'Test Post 1',
        'This is the first test post',
        'This is the content for the first test post'
        'Test Image 1',
        1
    ),

    (
        'Test Post 2',
        'This is the second test post',
        'This is the content for the second test post'
        'Test Image 2',
        2
    ),

    (
        'Test Post 3',
        'This is the third test post',
        'This is the content for the third test post'
        'Test Image 3',
        1
    ),

    (
        'Test Post 4',
        'This is the fourth test post',
        'This is the content for the fourth test post'
        'Test Image 4',
        2
    );