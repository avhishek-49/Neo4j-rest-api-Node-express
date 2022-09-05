
import express from 'express'

import user  from "./src/routes/user.js"

import * as dotenv from 'dotenv' 
dotenv.config()

const app = express();

app.use(express.json())


app.use(express.urlencoded({extended:true}))


app.use('/',user)

app.listen(process.env.PORT)