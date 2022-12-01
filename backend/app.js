require("dotenv").config();
require("./config/database.js").connectMongoDB();
const express = require("express");
const userRoutes = require("./routesMiddleware/userRoutes")
const app = express();
const cors = require('cors');

 
app.use(cors());

//middlewaare
app.use(express.json());
app.use(express.urlencoded({
    extended : true,
}));
app.use(userRoutes);




module.exports =app;