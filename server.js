const express = require('express');
const fs = require('fs');
const app = express();
const port = 5000;

app.use(express.json());

// 从todos.json文件中读取脚本数据
let todos = [];
fs.readFile('scripts.json', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading scripts.json:', err);
  } else {
    todos = JSON.parse(data);
  }
});

// 获取脚本
app.get('/scripts', (req, res) => {
  res.json(todos);
});

// 添加脚本
app.post('/scripts', (req, res) => {
  const todo = req.body;
  todos.push(todo);
  // 将更新后的脚本数据写入todos.json文件
  fs.writeFile('scripts.json', JSON.stringify(todos), 'utf-8', (err) => {
    if (err) {
      console.error('Error writing scripts.json:', err);
    }
  });
  res.status(201).json(todo);
});

// 删除脚本
app.delete('/scripts/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === parseInt(req.params.id));
  todos.splice(index, 1);
  // 将更新后的脚本数据写入todos.json文件
  fs.writeFile('scripts.json', JSON.stringify(todos), 'utf-8', (err) => {
    if (err) {
      console.error('Error writing todos.json:', err);
    }
  });
  res.json({ message: 'cmd_scripts deleted successfully' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});