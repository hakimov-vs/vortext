const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve the frontend files
app.use(express.static(path.join(__dirname, '/')));

io.on('connection', (socket) => {
    console.log('A user connected');
    console.log(socket)

    // When a message is received
    socket.on('ping', (msg) => {
        // Broadcast to everyone (including sender)
        io.emit('pong', msg);
    
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
