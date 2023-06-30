import express from 'express'
import router from './src/routes/index.js';

const app = express()

app.use(router)
app.use(express.json())

console.log("holaaaas");

app.listen(3000)
console.log(`server on port ${3000}`);