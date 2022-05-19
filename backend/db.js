const mongoose = require('mongoose');

mongoose.connect('mongodb://root:root@localhost:27017/db_laptop?authSource=admin');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', () => console.log('Server database terhubung'));