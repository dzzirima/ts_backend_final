import {object ,number , string , TypeOf} from "zod"


const payload = {
    body:Object({
        title:string({
            required_error:"Title is required ",
            
        }),
        description:string(),
        price :number(),
        image:string()

    })
}


const params = {
    params:Object({
        productId:string({
            required_error:"productId is required "
        })
    })
}


export const createProductSchema = object({
    ...payload
})


export const updateProductSchema = object({
    ...payload,
    ...params
})

export const deleteProductSchema = object({
    ...params
})

export const getProductSchema = object({
    ...params
})


export type CreateProductInput = TypeOf<typeof createProductSchema>
export type UpdateProductInput = TypeOf<typeof updateProductSchema>
export type ReadProductInput = TypeOf<typeof getProductSchema>
export type DeleteProductInput = TypeOf<typeof deleteProductSchema>
