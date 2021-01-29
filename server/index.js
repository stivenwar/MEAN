const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

const {mongoose} =require('./database');

//SETTINGS
app.set('port',process.env.PORT||3000);


//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());



//Routes
app.use('/api/movies',require('./routes/movies'));


//Starting the server
app.listen(app.get('port'),() =>{
    console.log('Server on port', app.get('port'))
})
