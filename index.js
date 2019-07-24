const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./resources/users/users-route');
require('dotenv').config();

const server = express();
const port = process.env.PORT || 5000;

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use('/api', routes);

server.listen(port, () => {
  console.log(`Server running on port:- ${port}`);
})
