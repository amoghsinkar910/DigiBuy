const mongoose = require('mongoose')

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useCreateIndex:true,
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log(`Connection established at ${conn.connection.host}`);
    }
    catch(error){
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB