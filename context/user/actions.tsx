import { client } from "@/lib/api"
import { imageToBase64 } from "@/lib/imageToBase64"
import { uploadImage } from "@/lib/imagekit"


export const uploadPost =async(dispatch:React.Dispatch<any>,payload:any)=>{
    dispatch({type:'INIT_REQUEST'})
        const {image,post,token} = payload
        try{
            let base64 =await imageToBase64(image.image)
            if(base64){
                await client({url:'post/create',method:'post',payload:{
                    image:{
                        image:base64,
                        name:image.name
                    },
                    post:{
                        title:post.title,
                        caption:post.caption
                    }
                },token:token})
                dispatch({type:'FINISH_REQUEST'})
            }
            else{
                dispatch({type:'FINISH_REQUEST'})
            }
        }catch(err){
            console.log(err)
            dispatch({type:'FINISH_REQUEST'})
        }
        
}