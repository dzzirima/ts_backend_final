import mongoose from "mongoose";
import { customAlphabet } from "nanoid";
import { UserDocument } from "./user.model";

const nanoid = customAlphabet("abcdefdfghijklmnopqrstuvwxyz01234567890", 10)

export interface ProductDocument extends mongoose.Document{
    user:UserDocument['_id']
    title:string
    description:string
    price:number
    image:string
    createdAt:Date
    updatedAt:Date
}


const productSchema = new mongoose.Schema(
    {
        productId:{
            type:String,
            require:true,
            unique:true,
            default:() =>`product_${nanoid()}`
        },
        title:{
            type:String,
        },
        description:{
            type:String
        },
        price:{
            type:Number
        },
        image:{
            type:String
        }
    },
   

)

const ProductModel = mongoose.model<ProductDocument>("Product",productSchema)
export default  ProductModel