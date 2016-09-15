"use strict";

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});


const server = app.listen(process.env.PORT, process.env.IP, () =>{
    console.log('Accepting connections on port ' + process.env.PORT + '...');
});