const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

let tasks = [
  { id: 1, title: 'Tarefa 1', status: 'todo' },
  { id: 2, title: 'Tarefa 2', status: 'doing' },
  { id: 3, title: 'Tarefa 3', status: 'done' }
];

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const newTask = {
    id: Date.now(),
    title: req.body.title,
    status: 'todo'
  };
  tasks.push(newTask);
  res.json(newTask);
});

app.put('/api/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (task) {
    task.status = req.body.status;
    res.json(task);
  } else {
    res.status(404).json({ error: 'Tarefa não encontrada' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Kanban rodando em http://localhost:${PORT}`);
});