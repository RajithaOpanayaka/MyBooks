var express=require("express"),
    Book   =require("../models/book"),
    router =express.Router();

///index
router.get("/books",function(req,res){
	res.render("Books/index");
});


module.exports=router;