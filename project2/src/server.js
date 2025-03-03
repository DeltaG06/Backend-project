// Import express from express
import express from 'express';
import path,{ dirname } from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoute.js'

const app = express();
const PORT = process.env.PORT || 6439

// Get ther file path from the URL of current module
const __filename = fileURLToPath(import.meta.url)
//Get the directory name from the file path
const __dirname = dirname(__filename)
//serving up hTML filefrom /public director
// also tell express to serve all files in the public 

//middleware
app.use(express.json())
app.use(express.static(path.join(__dirname,'../public')))


app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname,'public','index.html'));

});

//routes 
app.use('/auth',authRoutes)
app.use('/todos',authRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

