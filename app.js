// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// var datas = [];


// app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({extended: true}))

// app.get("/", function(req, res){
//     var day = new Date();
//     var today = day.getDate();

 
//     res.render("list", {toDay:today, new:datas});
// });

// app.post("/", function(req, res){
//     var data = req.body.newItem;

//     datas.push(data);

//     res.redirect("/");

// });









// app.listen(3000, function(){

// })

const express = require("express");
const bodyParser = require("body-parser");
const ejsLint = require('ejs-lint');
const fs = require('fs');

const app = express();

var datas = [];


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    var day = new Date();
    var today = day.getDate();

    // Read the EJS template file and store its contents in a variable
    const ejsTemplate = fs.readFileSync('views/list.ejs', 'utf8');

    // Lint the EJS template
    const result = ejsLint(ejsTemplate, { await: true });

    // If there are syntax errors, log the error message
    // if (result) {
    //   console.error(result.message);
    // } else {
    //   console.log('No syntax errors found!');
    // }

    res.render("list", {toDay:today, new:datas});
});

app.post("/", function(req, res){
    var data = req.body.newItem;

    datas.push(data);

    res.redirect("/");

});









app.listen(3000, function(){

})
