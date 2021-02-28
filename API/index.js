const express = require('express')
const app = express()
const PORT = 8080
const HOST = '0.0.0.0'
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

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);