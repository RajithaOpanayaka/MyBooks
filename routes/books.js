var express=require("express"),
    Book   =require("../models/book"),
    router =express.Router();

///index
router.get("/books",function(req,res){
	Book.find({},function(err,books){
		if(err){
			console.log(err);
		}else{
			res.render("Books/index",{books:books});
		}
	});
	
});
///new book
router.get("/books/new",function(req,res){
	res.render("Books/new");
});

///create book
router.post("/books",function(req,res){
	Book.create(req.body.book,function(err,book){
		if(err){
			console.log(err);
		}else{
			res.redirect("/books");
		}
	});
});


module.exports=router;