import {useState} from 'react'

import { Form } from "@/components"
import { Button,Input } from "@/components/form"
import LoginButton from '@/components/common/auth/LoginButton'

import { useUserFeatures } from '@/lib/hooks'
import { useAuthState } from '@/context/auth/AuthProvider'

import NextStyles from '../../../styles/post.module.css'

export interface PostCommentProps{
    postId:string
}

const PostComment:React.FC<PostCommentProps> =({postId})=>{

    const {isAuthorized} = useAuthState()
    const {postComment,isLoading} = useUserFeatures()
    const [comment,setComment] = useState('')

    if(!isAuthorized){
        return <div className={NextStyles.post_comment}>
            <LoginButton width='100%' text='Login to comment'/>
        </div>
    }

    return(
            <Form.Form  classNames={NextStyles.post_comment} action={()=>postComment({postId:postId,comment:comment})}>
                <Input type='text' maxWidth='100%' required placeholder='Post a comment' disabled={!isAuthorized} value={comment} action={(e:any)=>setComment(e.target.value)}/>
                <Button.Primary styles={{margin:'0',width:'4rem'}}  text='Post' type='submit' loading={isLoading}/>
            </Form.Form>
    )
}

export default PostComment;