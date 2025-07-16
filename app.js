//Import modules
const express = require('express');
const cors = require('cors');

const dataManager = require('./dataManager.js');

//Initialize express app
const app = express();
app.use(cors());
app.use(express.json());

let data = new dataManager();

//Routes
app.get('/', (req, res) => {
  res.send('Hello, World! This is the backend server running.');
});

app.get('/api/tasks', (req, res) => {
  res.json(data.getTask());
});

app.get('/api/tasks/:id', (req, res) => {
  const task = data.getTaskById(req.params.id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).send('Task not found');
  }
});

app.post('/api/tasks', (req, res) => {
  const task = req.body.task;
  if(task) {
    data.addTask(task);
    res.status(200).send('Task added');
  }
  else {
    res.status(400).send('Task missing');
  }
});

app.put('/api/tasks/:id', (req, res) =>{
  const id = parseInt(req.params.id);
  const updatedTask = req.body.task;
  if(id >= 0 && updatedTask){
    data.updateTask(id, updatedTask);
    res.status(200);
  }
  else{
    res.status(400).send('Task or ID missing')
  }
});

app.delete('/api/tasks/:id', (req, res) =>{
  const id = parseInt(req.params.id);
  if(id >= 0){
    data.deleteTask(id);
    res.status(200);
  }
  else{
    res.status(400).send('Invalid ID');
  }
});

//run the app
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});


module.exports = app;