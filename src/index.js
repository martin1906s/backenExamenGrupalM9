require('dotenv').config();
// 💡 Nueva importación
const cors = require('cors'); 
const tareaRoutes = require('./routes/tareaRoutes');
// ... (otras importaciones)
const express = require('express');
const path = require('path');
const app = express();

const { apiReference } = require('@scalar/express-api-reference');

const port = process.env.PORT;

const allowedOrigin = process.env.CORS_ORIGIN || 'http://localhost:4200';

const corsOptions = {
  origin: allowedOrigin,
  credentials: true
};


app.use(cors(corsOptions)); 



app.use(express.json());

