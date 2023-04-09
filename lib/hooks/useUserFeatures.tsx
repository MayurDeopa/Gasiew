import { useAuthState } from "@/context/auth/AuthProvider"
import { useState ,useEffect} from "react"
import { client, user } from "../api"
import { uploadImage } from "../imagekit"


interface commentProps{
    postId:string
    comment:string
}

interface updateUserAvatarProps{
    oldImage:{
        id:string
    }
    newImage:{
        file:any
    }
}

const useUserFeatures =()=>{
    const {token,user} = useAuthState()
    const [asyncData,setAsyncData] = useState()
    const [err,setErr] = useState<any>()
    const [isLoading,setIsLoading] = useState<boolean>(false) 

    const postComment = async(props:commentProps)=>{
        setIsLoading(true)
        let {data,err,} = await client({url:'post/comment/post',method:'post',payload:props,token:token})
        setIsLoading(false)
    }

    

    const updateUserAvatar = async(params:updateUserAvatarProps)=>{
        const {oldImage,newImage} = params
        setIsLoading(true)
       const {imageData,error} =  await uploadImage({
            file:newImage.file,
            fileName:user.username
        })
        if(error){
            setErr(error)
        }
        else{
            let payload= {
                oldImageId:oldImage.id,
                newImage:{
                    height:imageData!.height,
                    width:imageData!.width,
                    url:imageData!.url,
                    fileId:imageData!.fileId
                }
            }
            const {data,err} = await client({url:'user/account/update/avatar',method:'post',payload:payload,token:token})
            if(err){
                setErr(err)
            }
            else{
                setAsyncData(data.data)
            }
            setIsLoading(false)
        }
    }

    const isProfileCurrentUser = (userId:string)=>user.id == userId

    return {isProfileCurrentUser,postComment,isLoading,updateUserAvatar,asyncData,err}
}

export default useUserFeatures