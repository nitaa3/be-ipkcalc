// backend/server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import modul cors
const mahasiswaRoutes = require('./routes/mahasiswa');

const app = express();
const PORT = process.env.PORT || 3000;

// app.use(cors()); 
app.use(cors({
  origin: 'https://nitaa3.github.io/fe-ipkcalc/' // Atur domain atau port yang diizinkan
}));
app.use(bodyParser.json());
app.use('/mahasiswa', mahasiswaRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
