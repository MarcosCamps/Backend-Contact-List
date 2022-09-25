DROP SCHEMA IF EXISTS ContactsManager;
CREATE SCHEMA IF NOT EXISTS ContactsManager;

CREATE TABLE ContactsManager.Users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  username TEXT NOT NULL
);

CREATE TABLE ContactsManager.Contacts (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  userId INTEGER,
  email TEXT NOT NULL,
  telephone INTEGER NOT NULL,
  whatsapp BOOLEAN NOT NULL,
  FOREIGN KEY (userId) REFERENCES ContactsManager.Users (id)
);

INSERT INTO
  ContactsManager.Users (username)
VALUES
  ("Marcos Campos");

INSERT INTO
 ContactsManager.Users (username)
VALUES
  ("Patrícia Dias Viana");

INSERT INTO
  ContactsManager.Users (username)
VALUES
  ("Allan Hubner");

INSERT INTO
  ContactsManager.Contacts (email, telephone, whatsapp)
VALUES
  ("marxmyers@icloud.com", 61123456789, true);

INSERT INTO
  ContactsManager.Contacts (, email, telephone, whatsapp)
VALUES
  ("patriciavianad@gmail.com", 11987654321, true);

INSERT INTO
  ContactsManager.Contacts (, email, telephone, whatsapp)
VALUES
  ("allanhubner@icloud.com", 11987554321, false);