// const express = require("express");
import express , {Request,Response} from 'express';
import * as bodyParser from 'body-parser';
import  { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'
import {authCheck,signup} from './controllers/auth'
import path from "path"
//config
const app = express ();
const server = new ApolloServer({ typeDefs, resolvers });

//Middleware
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname +'public')))

//Routes
// app.post('/login',authCheck)
// app.post('/signup',signup)
// app.get('/',(req :Request , res:Response)=>{
//     res.send("hello world")
// })

server.applyMiddleware({ app });

export default app