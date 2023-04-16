import {useEffect} from 'react'
import Image from 'next/image';

import { Container } from "@/components/misc";
import { user } from '@/lib/api';
import { useAuthState } from '@/context/auth/AuthProvider';
import { useAsync } from '@/lib/hooks';
import Skeleton from '@/components/feedback/skeleton/Skeleton';
import Link from 'next/link';
import PostListPost from './PostListPost';


export interface PostListProps{
    posts?:any[]
}


const PostList:React.FC<PostListProps> = ({posts})=>{



    if(posts){
        return (
            <Container style={{flexDirection:'column',gap:'0'}}>
                {posts.map((p:any,i:number)=>{
                    return(
                        <Link href={`/p/${p.id}`} key={i}>
                            <PostListPost id={p.id} title={p.title} caption={p.caption} image={p.assets} user={p.user}/>
                        </Link>
                    )
                })}
            </Container>
        )
    }

    const {token} = useAuthState()
    const {data,loading,error} = useAsync({url:'post',method:'get',token:token})
    


    if(loading ){
        return(
            <Skeleton width='100%' height='100vh'/>
        )
    }

    if(error){
        return <p>{error}</p>
    }

    return(
        
        <Container style={{flexDirection:'column',gap:'0',alignItems:'center',maxWidth:'40rem',padding:'var(--space-8)'}}>
            {data.data.map((p:any,i:number)=>{
                return(
                    <Link href={`/p/${p.id}`} key={i} style={{width:'inherit'}}>
                        <PostListPost id={p.id} title={p.title} caption={p.caption} image={p.assets} user={p.user}/>
                    </Link>
                )
            })}
        </Container>
    )   
}


export default PostList;