const sqlite3 = require('sqlite3').verbose();

//skapa anslutning till databasen
const db = new sqlite3.Database('./cv.db', (err) => {
    if (err) {
        console.error('kunde ej ansluta till databasen', err);
    } else {
        console.log('ansluten till databasen');
    }
});

//skapa tabellen om den inte redan finns
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS courses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            coursecode TEXT NOT NULL,
            coursename TEXT NOT NULL,
            syllabus TEXT NOT NULL,
            progression TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);
});

module.exports = db;
