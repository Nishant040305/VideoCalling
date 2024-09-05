const path = require("path");
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT;
const web = process.env.FRONTWEB;
const SPORT = process.env.SPORT;
const http = require('http');
const {Server} = require('socket.io');
const server = http.createServer(app);
const io = new Server({
    cors: {
        origin: web
    }
});
app.use(cors({
    origin:web,
    methods:"GET,POST,PUT,DELETE",
    credentials:true
}));


app.use(express.json());
app.use(cookieParser());
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server error');
  });
  
server.listen(PORT,()=>{
    console.log(`Server running at PORT ${PORT}`)
})

io.listen(SPORT);
io.httpServer.on('listening', function () {
    console.log('Chat server listening on PORT', io.httpServer.address().port);
});