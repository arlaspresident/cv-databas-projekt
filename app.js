const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./database'); //kopplar in databasen

const app = express();
const PORT = 3000;

//view engine
app.set('view engine', 'ejs');

//public filer som CSS
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));


//startsida
app.get('/', (req, res) => {
    const sql = 'SELECT * FROM courses';
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.send('Fel vid hämtning av kurser');
        } else {
            res.render('index', { courses: rows });
        }
    });
});

//om sidsn
app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/add', (req, res) => {
    res.render('add');
});

//hantera formulär data när man lägger till kurs
app.post('/add', (req, res) => {
    const { coursecode, coursename, syllabus, progression } = req.body;

    //servervalidering
    if (!coursecode || !coursename || !syllabus || !progression) {
        return res.send('Alla fält måste fyllas i!');
    }

    const sql = 'INSERT INTO courses (coursecode, coursename, syllabus, progression) VALUES (?, ?, ?, ?)';
    const params = [coursecode, coursename, syllabus, progression];

    db.run(sql, params, function(err) {
        if (err) {
            console.error(err.message);
            res.send('Fel vid tillägg av kurs');
        } else {
            res.redirect('/');
        }
    });
});

//radera kurs
app.get('/delete/:id', (req, res) => {
    const sql = 'DELETE FROM courses WHERE id = ?';
    db.run(sql, req.params.id, function(err) {
        if (err) {
            console.error(err.message);
            res.send('Fel vid borttagning av kurs');
        } else {
            res.redirect('/');
        }
    });
});

//starta servern
app.listen(PORT, () => {
    console.log(`Servern körs på http://localhost:${PORT}`);
});
