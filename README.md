#**CV databas projekt**

Detta är ett projekt för att lagra och visa kurser som jag har läst som en del av mitt CV. Projektet är utvecklat med Node.js, Express, SQLite och EJS.

##**Funktioner**

Visa alla lagrade kurser
Lägg till ny kurs via formulär
Radera kurs
Server-side validering av formulär
Enkel och responsiv design
Teknisk översikt

Backend: Node.js och Express
Databas: SQLite
View engine: EJS
Styling: CSS
Installation

##**Klona detta repository:**
git clone (https://github.com/arlaspresident/cv-databas-projekt.git) cd cv-databas-projekt
Installera nödvändiga paket:
npm install
Starta applikationen:
node app.js
Gå till:
http://localhost:3000


##**Databasinstallation:**

Projektet använder SQLite som databas.

För att skapa databasen manuellt använd följande SQL script:

CREATE TABLE IF NOT EXISTS courses ( id INTEGER PRIMARY KEY AUTOINCREMENT, coursecode TEXT NOT NULL, coursename TEXT NOT NULL, syllabus TEXT NOT NULL, progression TEXT NOT NULL, created_at DATETIME DEFAULT CURRENT_TIMESTAMP );

Skriptet finns även i projektmappen som filen database.sql.

När du kör projektet lokalt behöver du inte köra detta manuellt, eftersom tabellen skapas automatiskt när du startar servern.

##**ER-diagram**

Se bilden i projektmappen: diagram.png
