CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  date_birth DATE,
  address VARCHAR(255),
  token VARCHAR(255),
  password VARCHAR(255) NOT NULL,
  mobile_phone VARCHAR(20),
  email VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);
