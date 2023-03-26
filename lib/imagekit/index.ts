import { imagekit } from "./imagekit"


export interface uploadImageProps{
    file:any
    fileName:string
    tags?:string[]
}

export const uploadImage = async(params:uploadImageProps)=>{
    if(!params.file || !params.fileName){
        return {error:'Fill out the required fields'}
    }
    let imageData,error
    try{
        imageData = await imagekit.upload({
            file:params.file,
            fileName:params.fileName,
        })
    }
    catch(err){
        console.log(err)
        error = err
    }
    return {imageData,error}
}

