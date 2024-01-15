import mongoose from "mongoose";

const urlSchema=new mongoose.Schema({

   longUrl:{
    type:String,
   },
   shortUrl:{
    type:String,
   },
   createdOn:{
    type:Date
   },
   count:{
      type:Number
   },
   string:{
      type:String
   }

});

const Link=mongoose.model("links",urlSchema);
export {Link};