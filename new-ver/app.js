//require statements
const express = require('express');
const path = require('path');

//initiating the app
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

//home route
app.get('/', function(req, res){
  res.render('index');
});

//starting server
app.listen(3000, function(){
  console.log('server started on port 3000...');
});
