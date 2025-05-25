
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://noooo:noooo@cluster0.p7wqpso.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log("DB Connection Successfull");
})
.catch((err)=>{
    console.log("Error in Db Connection", err);
})