const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
const PORT = 3500;

app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Realmadrid8',
    database: 'db1'
})

app.get('/allUsers', (req, res)=>{
    const cmd = "SELECT * FROM user";
    db.query(cmd, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.listen(PORT, ()=>console.log(`Listening @ PORT ${PORT}`));