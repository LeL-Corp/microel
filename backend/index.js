const express = require('express');
const dotenv = require('dotenv');
const { devConfig, prodConfig } = require('./configurations/configurations.js');
const cors = require('cors');
const routes = require('./routes/routes.js');

dotenv.config();

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);


app.listen(config.port, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    });
