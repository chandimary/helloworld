//console.log('hello world');
/*creating codes for a hello world app to be displayed on the browser
reguire is a key word used for accessing a package of what we need to help us
show our code on the browser
*/
const express = require('express')
const app = express();
app.listen(3000, function(){
    console.log('listening on 3000')
})
//app.listen method to create so that sever can listen to the port 3000
//NOTE:browsers always send GET requests to the severs so that they can READ
//in express we handle the Get requests with the get method
//app.get(path,callback)//this is how they write the get method

app.get('/', function(req, res){
    res.send('Hello World');
})

