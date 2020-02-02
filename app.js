var express     =require("express"),
		app     =express(),
	   Book     =require("./models/book"),
	  Comment   =require("./models/comment"),
	  User      =require("./models/user"),
	mongoose    =require("mongoose"),
  bodyParser    =require("body-parser"),
  booksRoutes   =require("./routes/books"),
  commentRoutes =require("./routes/comments");
  methodOverride=require("method-override"),
 indexRoutes    =require("./routes/index");
	

mongoose.connect("mongodb://localhost/bookv2");


app.listen(3000,function(){
	console.log("server is running");
});


app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.set("view engine","ejs");

app.use(indexRoutes);
app.use(booksRoutes);
app.use(commentRoutes);
