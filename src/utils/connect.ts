import mongoose from "mongoose";
import config from "config"
import logger from "./logger"


async function connect (){
    const DB_URL = config.get<string>("DB_URL")

    try {
        await mongoose.connect(DB_URL)
        logger.info("database connected successfully")
        
    } catch (error) {
        logger.error("error connecting to db :")
        process.exit(1)
        
    }

}



export default connect