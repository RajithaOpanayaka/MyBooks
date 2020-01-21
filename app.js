var express  =require("express"),
		app  =express(),
	   Book  =require("./models/book"),
	mongoose =require("mongoose"),
  bodyParser =require("body-parser"),
  booksRoutes=require("./routes/books"),
 indexRoutes =require("./routes/index");
	

mongoose.connect("mongodb://localhost/book");


app.listen(3000,function(){
	console.log("server is running");
});


app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.use(indexRoutes);
app.use(booksRoutes);
