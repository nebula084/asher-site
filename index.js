const express = require('express');
const app = express();
const http = require('http');
const { disconnect } = require('process');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

console.log(__dirname);

app.get('/01/projects', (req, res) => {
  res.sendFile(__dirname + '/01/projects.html');
});
app.get('/01/about', (req, res) => {
  res.sendFile(__dirname + '/01/about.html');
});

app.get('./', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000);
