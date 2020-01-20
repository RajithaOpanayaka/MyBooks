var express  =require("express"),
  bodyParser =require("body-parser"),
  indexRoutes=require("./routes/index"),
	app      =express();



app.listen(3000,function(){
	console.log("server is running");
});


app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.use(indexRoutes);
