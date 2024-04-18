const mongoose = require("mongoose");

async function connectionToMongoAtlas(){
    try {
        await mongoose.connect(process.env.DB_URL)
        
        console.log("Connected to DB");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}


module.exports = {
    connectionToMongoAtlas
}