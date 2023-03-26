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
            console.log('uploaded')
        }
        else{
            console.log(error)
            dispatch({type:'FINISH_REQUEST'})
        }
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
        console.log(data)
        dispatch({type:'FINISH_REQUEST'})
}