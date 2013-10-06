//node server

var express = require('express'),
    path = require('path'),
    wrench = require('wrench'),
    http = require('http');
var app = express();
var server = http.createServer(app);

app.set('port', process.env.PORT || 3000);

var folderName = "fiddle_" + Math.random();
app.use('/fiddle', express.static(path.join(__dirname, 'public/' +folderName)));

app.get('/', function(req, res){
    res.send('<a href=\"public\/' + folderName +'\/index.html\"/>');
    res.end();
});

server.listen(app.get('port'), function(){
    wrench.copyDirSyncRecursive('template', 'public/' + folderName);
    process.chdir('public/' + folderName);
    require('child_process').spawn('vim', ['-S', 'fiddle.vim'], {stdio: 'inherit'});
    console.log('Server listening on port: ' + app.get('port'));
});



