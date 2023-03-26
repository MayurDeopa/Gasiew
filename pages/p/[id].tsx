import React, { useState } from 'react'

import Skeleton from "@/components/feedback/skeleton/Skeleton"
import Post from "@/components/shared/post/Post"
import { useAsync } from "@/lib/hooks"
import { useRouter } from "next/router"
import { Button } from '@/components/form'


import NextStyles from '../../styles/post.module.css'
import PostComment from '@/components/shared/post/PostComment'
import CommentSecion from '@/components/shared/post/CommentSection'
import { PostHeader } from '@/components/shared/post/PostInfo'
import Drawer from '@/components/overlays/drawer/Drawer'
import { PostPage } from '@/components/pages'

const PostPageWithId =()=>{
    return <PostPage/>
}

export default PostPageWithId;