var http=require("http");
var express=require("express");

var app=express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", function(req, res){
    res.send("Hello from my server");
});

app.get("/contact", function(req, res){
    res.send("my contact is 46538688");
});

app.get("/about", function(req, res){
    res.send("Moein");
});

app.listen(8080, function (){

    console.log("server running at http://localhost:8080");

});


/**
 * 
 * API functionality
 * 
 */

var items=[];

app.get("/api/products", function(req, res){
    console.log("user wants the catalog");
    res.json(items);

});

app.post("/api/products", function(req, res){

    var item= req.body;

    items.push(item);

    res.send("OK");
})