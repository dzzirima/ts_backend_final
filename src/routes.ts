import { Express, Request, Response } from "express";

function routes(app: Express) {






    
  /**
   * @openapi
   * /healthcheck/:
   *   get:
   *     tags:
   *       - healthCheck
   *     description: Respose when the app is up mand running
   *     responses:
   *       200:
   *         description: The app is up and running.
   */
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  /**
   * @openapi
   * '/user':
   *   post:
   *     tags:
   *       - User
   *     summary: Register a user
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CreateUserInput'
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *           application/json:
   *             schema: 
   *               $ref: '#/components/schemas/CreateUserResponce'
   *       409:
   *         description: Conflict
   *       400:
   *         description: Bad request
   */

  app.post("/user", (req: Request, res: Response) => res.sendStatus(409));

  /**
   * @openapi
   * 'getuserByid/{userId}':
   *  get:
   *    tags:
   *      - User
   *    summary: Get user by id
   *    parameters:
   *      - name: productId
   *        in: path
   *        description: The id of the product
   *        required: true
   *    responses:
   *       200:
   *         description: Success
   *         content:
   *           application/json:
   *             schema: 
   *               $ref: '#/components/schemas/CreateUserResponce'
   *       409:
   *         description: Conflict
   *       400:
   *         description: Bad request
   *    
   
   *   
   * 
   *      
   */

  app.post("/user", (req: Request, res: Response) => res.sendStatus(409));


}

export default routes;
