const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app =  express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/signup.html");
});



app.post("/",function(req,res){
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

        var data = {
          members:[
            {
              email_address
            }
          ]
        }

});









app.listen(3000,function(){
  console.log("server is up and running on port : 3000");
});

// API Key
// 9a921a6b1fa269e454d0027b105ff280-us1
//audience
// b760861cd7
