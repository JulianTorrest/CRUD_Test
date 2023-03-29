const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydatabase',
});

connection.connect((error) => {
  if (error) throw error;
  console.log('Connected to MySQL server');
});

// Routes
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  connection.query(`SELECT * FROM users WHERE id = ${id}`, (error, results) => {
    if (error) throw error;
    res.json(results[0]);
  });
});

app.post('/users', (req, res) => {
  const user = req.body;
  connection.query('INSERT INTO users SET ?', user, (error, result) => {
    if (error) throw error;
    res.status(201).send('User added successfully');
  });
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = req.body;
  connection.query('UPDATE users SET ? WHERE id = ?', [user, id], (error, result) => {
    if (error) throw error;
    res.status(200).send('User updated successfully');
  });
});

app.delete('/users/:id', (req, res) => {
  const
