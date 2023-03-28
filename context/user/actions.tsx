import { client } from "@/lib/api"
import { uploadImage } from "@/lib/imagekit"


export const uploadPost =async(dispatch:React.Dispatch<any>,payload:any)=>{
    dispatch({type:'INIT_REQUEST'})
        const {file,post,token} = payload
        let {imageData,error} = await uploadImage({
            file:file.file,
            fileName:file.fileName
        })
        if(imageData){
            let {data,success,err} = await client({url:'post/create',method:'post',payload:{
                image:{
                    url:imageData?.url,
                    height:imageData?.height,
                    width:imageData?.width
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
        
}