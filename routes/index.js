var express=require("express"),
       User=require("../models/user"),
   passport=require("passport"),
	 router=express.Router();

router.get("/",function(req,res){
    res.render("home");
});

router.get("/register",function(req,res){
	res.render("register");
});

router.post("/register",function(req,res){
	User.register(new User({username:req.body.username}),req.body.password,function(err,user){
		if(err){
			console.log(err);
			return res.render("register");
		}
		passport.authenticate("local")(req,res,function(){
			res.redirect("/books")
		})
	})
});	

module.exports=router;
