const mongoose = require("mongoose");
require("dotenv").config();

const url=process.env.DB_URL;
const db =process.env.DATABASE;
mongoose.connect("mongodb+srv://sandeshchiremath1:9WTD4yBTxaG079Rz@sandesh.9253ajb.mongodb.net/?retryWrites=true&w=majority&appName=sandesh/sandesh")
.then(res=>console.log("connection is successfull"))
.catch(err=>console.log(err));
