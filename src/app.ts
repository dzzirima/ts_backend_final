import express from "express";
import config from "config"
import connect from "./utils/connect";
import logger from "./utils/logger"
import routes from "./routes";
import swaggerDocs from "./utils/swagger";

const PORT = config.get<number>("PORT")

const app = express();


app.listen(PORT, async () =>{
    await connect()
    routes(app)

    logger.info("App is running")
    swaggerDocs(app,PORT)

   
})