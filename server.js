var express = require('express');
var app = express();
var path = require("path");

var http = require('http').createServer(app);
var io = require('socket.io')(http);
// function(req, res) {
    
//     //   res.writeHead(200, {'Content-Type': 'text/html'});
//     //   res.end(html);
//     }
http.listen(3000);

app.set("view engine", "jade");
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', function(req, res, next){
    //表示させる
    res.render("index");
});

app.get('/login', function(req, res, next){
    res.send("aho" + req.query.a);
});

io.on('connection', function(socket) {
    
    
    socket.on('msg', function(data) {
        io.emit('msg', data);
        
        socket.name = data[0];
        
    });
    
    
    
    
    socket.on('disconnect', function(data) {
        
        if (this.name){
            var mes = this.name + "さんがログアウトしました";
            io.emit('logout', mes);
        }
        
    });
    
});