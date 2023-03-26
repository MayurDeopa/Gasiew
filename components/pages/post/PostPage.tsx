import React from 'react'

import Skeleton from "@/components/feedback/skeleton/Skeleton"
import Post from "@/components/shared/post/Post"
import { useAsync } from "@/lib/hooks"
import { useRouter } from "next/router"

const PostPage =()=>{
    const router = useRouter()
    let id = router.query.id

    const {data,loading,error} = useAsync({url:`post/id/${id}`,method:'get'})


    if(loading){
        return <Skeleton height="40rem" width="100%" />
    }

    if(error){
        return <p>{error}</p>
    }

    return(
       <Post 
            post={{id:data.data.id,title:data.data.title,caption:data.data.caption,comments:data.data.comments}} 
            user={{username:data.data.user.username}}
            image={data.data.assets}
        />
    )
}

export default PostPage;