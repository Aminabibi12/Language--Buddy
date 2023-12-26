// Requires
const routes = require("./routes/routes");
const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const path = require('path');

// Middlewares
app.use(cors({
  origin: 'http://localhost:3000', // Replace with the actual origin of your React app
  credentials: true, // Allow credentials (cookies, headers) to be sent with the request
}));

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use(routes);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});