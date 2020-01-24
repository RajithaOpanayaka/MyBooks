var mongoose=require("mongoose");

var bookSchema=new mongoose.Schema({
	title:String,
	img:String,
	description:String,
	author:String,
	comments:[
				{
					type:mongoose.Schema.Types.ObjectId,
					ref:"Comment"
				}
			]
});


module.exports=mongoose.model("Book",bookSchema);

