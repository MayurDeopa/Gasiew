import { useAuthState } from "@/context/auth/AuthProvider"
import { useState ,useEffect} from "react"
import { client, user } from "../api"


interface commentProps{
    postId:string
    comment:string
}


const useUserFeatures =()=>{
    const {token,user} = useAuthState()
    const [asyncData,setAsyncData] = useState()
    const [isLoading,setIsLoading] = useState(false) 

    const postComment = async(props:commentProps)=>{
        setIsLoading(true)
        let {data,err,} = await client({url:'post/comment/post',method:'post',payload:props,token:token})
        setIsLoading(false)
    }

    const isProfileCurrentUser = (userId:string)=>user.id == userId

    return {isProfileCurrentUser,postComment,isLoading}
}

export default useUserFeatures