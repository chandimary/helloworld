//console.log('hello world');
/*creating codes for a hello world app to be displayed on the browser
reguire is a key word used for accessing a package of what we need to help us
show our code on the browser
*/
const express = require('express')
//FORM THE FORM PATH
const path = require('path')
const app = express();

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: true}))


//THIS CODE IS TO ENABLE YOU TO VIEW THE FORM ON THE BROWSER
app.set('view engine', "pug")

//The app.listen(... shows we are creating a server that is listening on port 3000 for connections.
app.listen(3000, function(){
    //We can test our server by running:
    console.log('listening on 3000')
})
//Now open your browser and visit: localhost:3000 and you should see Hello World!


//app.listen method to create so that sever can listen to the port 3000
//NOTE:browsers always send GET requests to the severs so that they can READ
//in express we handle the Get requests with the get method
//app.get(path,callback)//this is how they write the get method

/*app.get('/', function(req, res){
    res.send('Hello World');
})*/

//ways of using get to display information on aserver
//methods of http
/*The app.get('/'... means we are specifically focusing on the root URL 
(/). If we visit the root URL, Express will respond with “Hello World!”. */

app.get('/', (req, res)=>{
    res.send('Hello World');
})

app.get('/about',(req,res)=>{
    res.send('THIS IS ABOUT US PAGE')
})
app.post('/post',(req,res)=>{
    res.send('Got a Post Reques')
})

app.put('/put',(req,res)=>{
    res.send('Got a Put Request')
})

app.delete('/delete',(req,res)=>{
    res.send('Got a delete Request')
})

//if you want to see the body you code



app.get('/review',(req,res)=>{
     console.log('body',req.body)
   console.log('query params',req.query)
    res.render('form')
});


    app.post('/review',(req,res,next)=>{
        console.log('FORM has been posted')
        res.render('form')
    });
//the path definition
app.get('/THE_ASSINGMENT',(req,res)=>{
   res.render ('trial')

});


app.post('/trial',(req,res)=>{
    //when rendering or sending a request you have to use the name of the file e.g i created a file called trial.pug.there4 i render the file name "trial"
    res.render('trial')
})

app.get('/second_work',(req,res)=>{
    res.render ('thanks')
 
 });

 app.post('/thanks',(req,res)=>{
    //when rendering or sending a request you have to use the name of the file e.g i created a file called trial.pug.there4 i render the file name "trial"
    res.render('thanks')
})





//path paremeters//NOTE the path to be displayed on the sever is the words with the slash quotes
app.get('/users/:name',(req,res)=>{
    res.send('hello'+req.params.name)
})//example linkedin


app.get('*',(req,res)=>{
    res.send('THIS PAGE DOESNOT EXIST!')
})

 