const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const http = require('http');
const serverIo = require('socket.io');
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;


app.use(cors({

    origin: ["http://localhost:5173"],
    credentials:true
}));
app.use(express.json());

const server = http.createServer(app);
const io = serverIo(server, {
    cors: {
        origin: "http://localhost:5173",
  
        methods: ["GET", "POST"]
    }
});





app.get('/', (req, res) => {
    res.send('server is running')
});

io.on('connection', socket => {
    socket.on('disconnect', () => {
        
    });

    socket.on('sendMessage', async (messageInfo, receiverEmail) => {

 
        socket.broadcast.emit(receiverEmail, messageInfo);
        await messageList.insertOne(messageInfo);
       
    });
});




server.listen(port, () => {
    console.log(`server running at ${port}` );
});