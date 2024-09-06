const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
async function main(){
    await mongoose.connect(MONGO_URL);
}
main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>{
    console.log(err);
})


const initDB = async ()=>{
    await Listing.deleteMany({});
    let updatedData = initData.map((obj)=>({...obj , owner : '66cc85f8c00ebdd73835662a'}))
    await Listing.insertMany(updatedData);
    console.log("Data Intialized");
}

initDB();

