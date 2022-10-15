import { Request, Response } from "express";
import { CreateProductInput, UpdateProductInput } from "../schema/product.schema";
import { createProduct, deleteProduct, findAndUpdateProduct, findProduct } from "../service/product.service";

export async function createProductHandler(req:Request <{},{},CreateProductInput['body']>, res:Response){


    const user= "david"
    const body = req.body
    const product = await createProduct({
        ...body,
        user

    })

    return res.send(product)
     
}

export async function updateProductHandler(req:Request<UpdateProductInput['params']>, res:Response){

    const userId = res.locals.user._id;

    const  productId = req.params.productId

    const update = req.body

    const product = await findProduct({productId})

    if(!product){
        return res.sendStatus(403)
    }

    if(product.user !== userId){
        return res.sendStatus(403)
    }
     
    const updateProduct = await findAndUpdateProduct({productId},update, {
        new:true
    })

    return res.send(updateProduct)
}

export async function getProductHandler(req:Request<UpdateProductInput['params']>, res:Response){
    const productId = req.params.productId;
    const product = await findProduct({productId})

    if(!product){
        return res.sendStatus(403)
    }

    return res.send(product)




     
}

export async function deleteProductHandler(req:Request<UpdateProductInput['params']>, res:Response){

    const userId = res.locals.user._id;

    const  productId = req.params.productId


    const product = await findProduct({productId})

    if(!product){
        return res.sendStatus(403)
    }

    if(product.user !== userId){
        return res.sendStatus(403)
    }
     
    await deleteProduct({ productId })

    res.sendStatus(200)



     
}