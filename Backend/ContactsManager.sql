DROP SCHEMA IF EXISTS ContactsManager;
CREATE SCHEMA IF NOT EXISTS ContactsManager;

CREATE TABLE ContactsManager.Users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  userEmail VARCHAR(50),
  password VARCHAR(50)
);

CREATE TABLE ContactsManager.Contacts (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  userId INTEGER,
  name VARCHAR(100),
  email VARCHAR(100),
  telephone VARCHAR(50),
  whatsapp BOOLEAN,
  FOREIGN KEY (userId) REFERENCES ContactsManager.Users (id)
);

INSERT INTO
  ContactsManager.Users (userEmail, password)
VALUES
  ("marxmyers@icloud.com", "1234567"),
  ("patriciavianad@gmail.com", "1234567"),
  ("allanhubner@icloud.com", "1234567");

INSERT INTO
  ContactsManager.Contacts (userId, name, email, telephone, whatsapp)
VALUES
  (1,"marx", "marxmyers@icloud.com", 61123456789, true),
  (2,"patty", "patriciavianad@gmail.com", 11987654321, true),
  (3,"allan", "allanhubner@icloud.com", 11987554321, false);