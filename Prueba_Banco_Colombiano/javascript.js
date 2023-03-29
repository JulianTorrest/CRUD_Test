const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const pool = new Pool({
    user: '<username>',
    host: '<hostname>',
    database: '<database>',
    password: '<password>',
    port: <port>,
});

const app = express();
app.use(bodyParser.json());

// GET all users
app.get('/users', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM users');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// GET user by id
app.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        if (rows.length === 0) {
            res.status(404).send('User not found');
        } else {
            res.json(rows[0]);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// CREATE user
app.post('/users', async (req, res) => {
    const { first_name, last_name, date_birth, address, token, password, mobile_phone, email } = req.body;
    try {
        const { rows } = await pool.query('INSERT INTO users (first_name, last_name, date_birth, address, token, password, mobile_phone, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [first_name, last_name, date_birth, address, token, password, mobile_phone, email]);
        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// UPDATE user
app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, date_birth, address, token, password, mobile_phone, email } = req.body;
    try {
        const { rows } = await pool.query('UPDATE users SET first_name = $1, last_name = $2, date_birth = $3, address = $4, token = $5, password = $6, mobile_phone = $7, email = $8 WHERE id = $9 RETURNING *',
