// const express = require("express");
import express , {Request,Response} from 'express';
import * as bodyParser from 'body-parser';
<<<<<<< HEAD
import path from "path"
// import  { ApolloServer } from 'apollo-server-express';
// import typeDefs from './graphql/typeDefs'
// import resolvers from './graphql/resolvers'
// import {authCheck,signup} from './controllers/auth'
=======
import  { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'
import {authCheck,signup} from './controllers/auth'
import path from "path"
>>>>>>> 3855ed78850ecdf5e165cc65ab1ddef673ef1023
//config
const app = express ();
// const server = new ApolloServer({ typeDefs, resolvers });

//Middleware
app.use(express.static('build'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//Routes
// app.post('/login',authCheck)
// app.post('/signup',signup)
// app.get('/',(req :Request , res:Response)=>{
//     res.send("hello world")
// })

// server.applyMiddleware({ app });

export default app