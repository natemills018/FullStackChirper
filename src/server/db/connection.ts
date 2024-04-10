import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'chirper_user',
    password:'password123',
    database: 'relational_chirper'
});

export default pool;
