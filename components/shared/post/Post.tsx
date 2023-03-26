
import React, { useState } from "react"

import NewImage from "@/components/ui/Image"
import { Drawer } from "@/components/overlays"
import PostComment from "./PostComment"
import { PostHeader } from "./PostInfo"
import CommentSecion, { CommentProps } from "./CommentSection"
import { Button } from "@/components/form"

import NextStyles from '../../../styles/post.module.css'
import { useScreenWidth } from "@/lib/hooks"
import PostContainer from "./PostContainer"
import PostImage from "./PostImage"

export interface PostProps{
    post:{
        id:string
        title:string
        caption:string
        comments:CommentProps[]
    }
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

const Post:React.FC<PostProps> =(props)=>{

    const {
        post,
        user,
        image
    } = props




    return(
        <PostContainer
            image={<PostImage src={image.url} alt={post.caption} height={image.height} width={image.width}/>}
            info={<PostHeader header={user}/>}

            action={
                <React.Fragment>
                    <PostComment postId={post.id}/>
                    <CommentSecion comments={post.comments}/>
                </React.Fragment>
            }
        />

    )
}

export default Post;