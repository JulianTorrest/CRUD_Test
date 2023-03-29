CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    date_birth DATE NOT NULL,
    address VARCHAR(255),
    token VARCHAR(255),
    password VARCHAR(255),
    mobile_phone VARCHAR(20),
    email VARCHAR(255) UNIQUE NOT NULL
);
