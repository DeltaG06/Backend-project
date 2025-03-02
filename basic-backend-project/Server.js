 //adress of this file: http://localhost:8383/
  //run this file by typing: node server.js
  //to see the output, go to the browser and type: http://localhost:8383/
  //this is a simple server that runs on port 8383
const express = require('express')
const app = express()           
const Port = 8383         
console.log('this is an extra line');

let data = ['Gaurav']

// middleware

app.use(express.json());

  //http paths and verbs (get, post, put, delete)
app.get('/', (req, res) => {
  
    res.send(`
      <body
      style="background-color:pink;
      color: blue;
       font-family: Arial, sans-serif; 
       text-align: center;">
      <p>${JSON.stringify(data)}</p>
      </body>
    `);
  
  console.log('Reached home page');  
})

app.get('/dashboard', (req, res) => {
   console.log('Reached dashboard');
    
   res.send('<h>Welcome to the dashboard!</h>')  

}) 
app.get('/api/data', (req, res) => {
  res.send(data); 
  console.log('Reached data page');
})  

app.post('/api/data', (req, res) => {
  //someone wants to create a user
  //user clicks the button  and browser sends a request to the server to complete the action
  const newEntry = req.body;
  data.push(newEntry);
  console.log(newEntry);
  data.push(newEntry);
  

  
}
)  

app.listen(Port, () => console.log(`Server is running on : ${Port}`));

