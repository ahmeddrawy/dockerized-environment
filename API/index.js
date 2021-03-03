const express = require('express')
const app = express()
const PORT = 8080
const HOST = '0.0.0.0';
const {Client} = require('pg');
const client  = new Client();
console.log(client);
client.connect().then(()=>{
    console.log('connected to db');
}).catch(()=>{
    console.log("failed to connect");
})

// app.get('/', (req, res) => res.send('Halan ROCKS'))
app.get('/',  (req, res) =>{
    let n =req.query.n;
    if(!n)
        res.send('HALAN ROCKsss')
    else{
        let ret= n*n ;
        res.send(ret.toString());
    }
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);