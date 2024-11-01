const cloudinary = require('cloudinary').v2;
require('dotenv').config({ path: `config.env` });
cloudinary.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_API_KEY
});

module.exports = cloudinary;