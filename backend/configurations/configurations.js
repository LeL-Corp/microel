const dotenv = require('dotenv');
dotenv.config();

const devConfig = {
    port: 8000,

};

const prodConfig = {
    port: process.env.PORT,
};

module.exports = { devConfig, prodConfig };
