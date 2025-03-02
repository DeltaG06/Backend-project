 //adress of this file: http://localhost:8383/
  //run this file by typing: node server.js
  //to see the output, go to the browser and type: http://localhost:8383/
  //this is a simple server that runs on port 8383
const express = require('express')
const app = express()           
const Port = 8383         
console.log('this is an extra line');

  
  //http paths and verbs (get, post, put, delete)
app.get('/', (req, res) => {
  res.send('<h1>Hello World!(Basic html code)</h1>')
  res.sendStatus(588)
  
})

app.get('/dashboard', (req, res) => {
   console.log('Reached dashboard');
    
  res.send('Welcome to the dashboard!')
})   

app.listen(Port, () => console.log(`Server is running on : ${Port}`));
 
