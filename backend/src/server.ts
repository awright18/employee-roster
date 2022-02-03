import path from 'path';
import express from 'express';
import cors from 'cors';
import {fileURLToPath} from 'url';

// import rosterRoutes from './routes/roster';

const app = express();
const PORT = process.env.port || 3000;
app.use(cors());

// Set Express to use ejs
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve(__filename);
app.use(express.static(path.join(__dirname, '../../', 'views/css')));
app.set('views', path.join(__dirname, '../../', 'views'));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render("index");
});
// app.get('/roster', rosterRoutes);

app.listen(PORT, () => {
    console.log(path.join(__dirname, '../../', 'views/css'));
    console.log(`Server running on port: ${PORT}`);
})