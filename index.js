import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import dataRouter from './Route/dataRoute.js';

const app = express();
dotenv.config();
app.use(express.json())
app.use(cors());
const secretKey = "secretkey"
const port = process.env.port || 6000;
const url = process.env.MongoURL;

app.post("/login", async (req, res) => {
    const hashPass = await bcrypt.hash("password123", 10)
    const user = {
        id: 1,
        name: "kunjan",
        email: "kunjan@gmail.com",
        password: hashPass
    }

    jwt.sign({ user }, secretKey, { expiresIn: "900s" }, (err, token) => {
        res.json({
            token
        })
    })
})

function verifyToken(req, res, next) {
    const bearerData = req.headers["authorization"]
    if (typeof bearerData !== undefined) {
        const bearer = bearerData.split(" ")
        const token = bearer[1]
        req.token = token;
        next();
    }
    else {
        res.send({
            result: "invalid token"
        })
    }
}

app.post("/profile", verifyToken, (req, res) => {
    jwt.verify(req.token, secretKey, (err, authData) => {
        if (err) {
            res.send({
                result: "Invalid token"
            })
        }
        else {
            res.send({
                result: "valid token",
                authData
            })
        }
    })
})

try{
    mongoose.connect(url)
    console.log("db connected")
}
catch(error){
    console.log(error)
}

app.use("/data", dataRouter)

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running on port ${port}`);
    }
});

