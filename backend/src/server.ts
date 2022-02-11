import path from 'path';
import {fileURLToPath} from 'url';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import rosterRoutes from "./routes/roster.js";

const app = express();
const PORT = process.env.port || 3000;
app.use(cors());
app.use(bodyParser.json())

// Set Express to use ejs
const FILENAME = fileURLToPath(import.meta.url);
const DIRNAME = path.resolve(FILENAME);
app.use(express.static(path.join(DIRNAME, '../../', 'views/css')));
app.set('views', path.join(DIRNAME, '../../', 'views'));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render("index");
});
app.use('/roster', rosterRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})