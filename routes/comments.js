var express=require("express"),
    router=express.Router(),
  Comment=require("../models/comment"),
  Book   =require("../models/book");


//new
router.get("/books/:id/comments/new",function(req,res){
	Book.findById(req.params.id,function(err,book){
		if(err){
			console.log(err);
		}else{
			res.render("comments/new",{book:book});
		}
	})
	
});
//create
router.post("/books/:id/comments",function(req,res){
	Book.findById(req.params.id,function(err,book){
		if(err){
			console.log(err);
		}else{
			Comment.create(req.body.comment,function(err,comment){
				if(err){
					console.log(err);
				}else{
					comment.save();
					book.comments.push(comment);
					book.save();
					res.redirect("/books/"+req.params.id);
				}
			});
		}
	});
});

router.get("/books/:id/comments/:comment_id/edit",function(req,res){
	Comment.findById(req.params.comment_id,function(err,comment){
		if(err){
			console.log(err);
		}else{
			res.render("comments/edit",{comment:comment,book_id:req.params.id});
		}
	});
	
});

router.put("/books/:id/comments/:comment_id",function(req,res){
			 Comment.findByIdAndUpdate(req.params.comment_id,req.body.comment,function(err,updateComment){
					if(err){
			 		console.log(err);
			 	}else{
			 		res.redirect("/books/"+req.params.id);
			 	}
			 });

});

router.delete("/books/:id/comments/:comment_id",function(req,res){
	Comment.findByIdAndRemove(req.params.comment_id,function(err){
		if(err){
			console.log(err);
		}else{
			res.redirect("/books/"+req.params.id);
		}
	});
});

module.exports=router;