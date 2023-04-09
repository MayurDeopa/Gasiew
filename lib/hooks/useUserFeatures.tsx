import { useAuthState } from "@/context/auth/AuthProvider"
import { useState ,useEffect} from "react"
import { client, user } from "../api"
import { uploadImage } from "../imagekit"
import { imageToBase64 } from "../imageToBase64"


interface commentProps{
    postId:string
    comment:string
}

interface updateUserAvatarProps{
    oldImageId:string
    newImage:File
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
        const {oldImageId,newImage} = params
        setIsLoading(true)
        const base64 = await imageToBase64(newImage)
            let payload = {
                id:oldImageId,
                image:{
                    image:base64,
                    name:user.username
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

    const isProfileCurrentUser = (userId:string)=>user.id == userId

    return {isProfileCurrentUser,postComment,isLoading,updateUserAvatar,asyncData,err}
}

export default useUserFeatures