const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
app.use(express.json());
app.use(cors());



//create a database connection
const db = mysql.createConnection({

    host : 'localhost',
    user : 'root',
    password : '',
    database : 'attendant_base_system'

});

//connect
db.connect((err) => {

    if(err) {
        throw err;
    }
    console.log('mysql connected...');
});

app.post('/submit', (req, res)=>{
    // res.send('hi');
    console.log(req)

});

app.get('/test', (req, res) => {
    res.status(200).send({Data:"Hello"});
    console.log('Requested')
})

//listen to the network port
app.listen(3000, () =>{

    console.log('server started on port 3000');

});