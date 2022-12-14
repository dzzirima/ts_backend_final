import { Express, Response ,Request } from "express";
import swaggerJsDoc from 'swagger-jsdoc' // it reads the jsDoc -annoted source code and generates an OenAPI(swagger documentation)
import swaggerUi from 'swagger-ui-express'
import {version } from "../../package.json"
import log from "./logger"



const options :swaggerJsDoc.Options = {
    definition:{
        openapi :'3.0.0',
        info:{
            title:"Rest API documentation",
            version:version
        },
    },
    //an array of paths where your APIs are defined
    apis:["./src/routes.ts", "./src/models/*.ts" ,]
    
}

const swaggerSpecification = swaggerJsDoc(options)

/** funtion to create some endpoints */

function swaggerDocs(app:Express , port :number){
    //swagger page

    app.use('/docs' , swaggerUi.serve , swaggerUi.setup(swaggerSpecification))

    //Docs in json format
    app.get('docs.json', (req:Request , res:Response) =>{
        res.setHeader("Content-Type" , "application/json");
        res.send(swaggerSpecification)

    })

    log.info(`Doc  available at http:localhost:${port}/docs`)
}


export default swaggerDocs


