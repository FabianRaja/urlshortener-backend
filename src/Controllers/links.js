import { Link } from "../Models/index.js";
import { ObjectId } from "mongodb";
//adding Long Url
export default function addingUrl(data){
    return Link.insertMany(data)
}
//finding using Url
export function findByUrl(url){
    return Link.find({longUrl:url});
}
//finding using Id
export function find(id){
    return Link.findById({_id:new ObjectId(id)});
}
//adding short Url
export function addingShortUrl(id,link,randomString){
    return Link.findByIdAndUpdate({_id:new ObjectId(id)},{$set:{shortUrl:link,string:randomString}})
}
//finding using String
export function findUrl(string){
    return Link.find({string})
}
//increasing count while short url is opened
export function increaseCount(id){
    return Link.findByIdAndUpdate({_id:new ObjectId(id)},{$inc:{count:1}})
}
//finding all urls
export function allUrls(){
    return Link.find({})
}
//finding count for month
export function findData(month,year){
    return Link.find({createdAt:{$gt: new Date(`${year}-${month}-01`),$lt: new Date(`${year}-${month}-31`)}});
}
//finding count for day
export function findDataDay(date1,date2,month,year){
    return Link.find({createdAt:{$gt: new Date(`${year}-${month}-${date1}`),$lt: new Date(`${year}-${month}-${date2}`)}});
}
