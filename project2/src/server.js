// Import express from express
import express from 'express';

const app = express();
const PORT = process.env.PORT || 6439

console.log('Hello World!');

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});