import NewImage from "@/components/ui/Image"
import Link from "next/link"
import React from "react"

import NextStyles from '../../../styles/post.module.css'
import PostImage from "./PostImage"

export interface PostProps{
    id:string
    title:string
    caption:string
    image:{
        url:string
        height:number
        width:number
    }
    user:{
        username:string
        assets?:{
            url:string
            height:number
            width:number
        }
    }
}

const PostListPost:React.FC<PostProps> =(props)=>{

    const {
        id,
        title,
        caption,
        user,
        image
    } = props


    return(

            <article className={NextStyles.wrapper}>
                <p style={{fontWeight:500,fontSize:'20px'}}>{user.username}</p>
                <NewImage imageProps={{src:image.url,alt:caption,fill:true,style:{objectFit:'contain'}}} containerProps={{className:NextStyles.image,style:{paddingTop:"50%"}}} />
                <p>{caption}</p>
            </article>
    )
}

export default PostListPost;