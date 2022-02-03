import path from 'path';
import express from 'express';
import cors from 'cors';

import rosterRoutes from './routes/roster'

const app = express();
const PORT = process.env.port || 3000
app.use(cors());

// Set Express to use ejs
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Routes
app.get('/roster', rosterRoutes)