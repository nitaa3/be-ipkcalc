// backend/database/db.js

const mysql = require('mysql2/promise');

// Konfigurasi koneksi ke database
const connection = mysql.createPool({
  MYSQLHOST: 'roundhouse.proxy.rlwy.net',
  MYSQLUSER: 'root', // Ganti dengan username Anda
  MYSQLPASSWORD: 'WNJMzaNEYRgWFrKuZxBwHmeszPzxsfuL', // Ganti dengan password Anda
  MYSQL_DATABASE: 'railway' // Ganti dengan nama database Anda
});

module.exports = connection;
