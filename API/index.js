const express = require('express')
const app = express()
const port = 4000

// app.get('/', (req, res) => res.send('Halan ROCKS'))
app.get('/',  (req, res) =>{
    let n =req.query.n;
    if(!n)
        res.send('HALAN ROCKS')
    else{
        let ret= n*n ;
        res.send(ret.toString());
    }
})