import Link from "next/link";
import { CommentProps } from "./CommentSection";

import NextStyles from '../../../styles/post.module.css'


const Comment:React.FC<CommentProps> =(commentData)=>{

    const {user,created_at,comment} = commentData

    return(
        <div className={NextStyles.comment}>
            <article className={NextStyles.comment_header}>
                <Link href={`/u/${user.username}`}>{user.username}</Link>
            </article>
            <article className={NextStyles.comment_data}>
                {comment}
            </article>
        </div>
    )
}

export default Comment;