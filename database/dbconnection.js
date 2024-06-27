import mongoose from "mongoose";

const dbconnection =()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"restaurant"
    }).then(()=>{
        console.log("connected to database");
    })
    .catch((err)=>{
        console.log("err detectected",err);
    })
}
export default dbconnection;