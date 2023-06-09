import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"

import postRoutes from './routes/posts.js'

const app = express()



app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.use('/posts', postRoutes)

const CONNECTION_URL = "mongodb+srv://yassinekrika2016:V6maWJQey2rMjBwk@cluster0.ktlsqdr.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, ()=> console.log(`server running on port: ${PORT}`)))
    .catch((error)=> {console.log(error)})

// mongoose.set({'useFindAndModify', false})