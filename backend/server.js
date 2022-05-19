const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const product = require('./routes');

require('./db');

const app = express();
const port = 8000;

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/product", product);

app.listen(port, () => {
	console.log("Server berhasil running pada port : " + port)
});
