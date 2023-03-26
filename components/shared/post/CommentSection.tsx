import React from "react"

import NextStyles from '../../../styles/post.module.css'
import Comment from "./Comment"

export interface CommentProps{
    id:string
    created_at:string
    user:{
        username:string
    }
    comment:string
}

export interface CommentSecionProps{
    comments:CommentProps[]
}



const CommentSecion:React.FC<CommentSecionProps> =({comments})=>{

    const mountComments =()=>{
        if(comments.length<1){
            return <p>No comments</p>
        }
        return comments.map((c,index)=>{return <Comment key={index} {...c}/>})
    }

    return(
        <section className={NextStyles.comment_section}>
            {mountComments()}
        </section>
    )
}

export default CommentSecion