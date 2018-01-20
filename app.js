var express = require("express"),
    app     = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+'/public'));

// ROUTES
app.get('/', function (req, res) {
    res.redirect('/index');    
})

app.get('/index', function (req, res) {
    res.render("index");    
})


// LISTEN
app.listen(3000, function (err){
    if(err) {
        console.log(err);
    }
    else {
        console.log("server started on PORT 3000");
    }
})