DROP SCHEMA IF EXISTS ContactsManager;
CREATE SCHEMA IF NOT EXISTS ContactsManager;

CREATE TABLE ContactsManager.Users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  username VARCHAR(50),
  password VARCHAR(50)
);

CREATE TABLE ContactsManager.Contacts (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  userId INTEGER,
  email VARCHAR(100),
  telephone VARCHAR(50),
  whatsapp BOOLEAN,
  FOREIGN KEY (userId) REFERENCES ContactsManager.Users (id)
);

INSERT INTO
  ContactsManager.Users (username, password)
VALUES
  ("marxmyers@icloud.com", "1234567"),
  ("patriciavianad@gmail.co", "1234567"),
  ("allanhubner@icloud.com", "1234567");

INSERT INTO
  ContactsManager.Contacts (userId, email, telephone, whatsapp)
VALUES
  (1, "marxmyers@icloud.com", 61123456789, true),
  (2, "patriciavianad@gmail.com", 11987654321, true),
  (3, "allanhubner@icloud.com", 11987554321, false);