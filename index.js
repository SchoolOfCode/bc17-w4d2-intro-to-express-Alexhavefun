import express from 'express'; //import the express module
const app = express(); //create an instance of express
const port = 3000; //define the port number

app.get('/', (req, res) => {
    res.send("Hello World!");
}); 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});