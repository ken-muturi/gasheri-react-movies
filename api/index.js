const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const compression = require('compression');
// const path = require('path');

const countriesRoutes = require('./routes/countries')
const genresRoutes = require('./routes/genres');
const userRoutes = require('./routes/users');
const moviesRoutes = require('./routes/movies');
const authRoutes = require('./routes/auth');
const { hashPassword } = require("./utils/util");

const app = express();
app.use(cors()); // this is allow request from different post (3001 => 3000)
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(bodyParser.json({ limit: '50mb' }));
app.use(compression());

app.use('/api/countries', countriesRoutes);
app.use('/api/genres', genresRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/movies', moviesRoutes);

const hash = hashPassword(Date.now().toString())
console.log({ hash })
app.get('/', (req, res) => res.json({
    welcome: Date.now()
}));


const port = 8000;
app.listen(port, (req, res) => console.log(`Listening at port ${port}`));
