import { Container } from "@/components/misc"
import Link from "next/link"

import NextStyles from '../../../styles/post.module.css'
import { Avatar } from "@/components/ui"

export const CustomContainer =({children}:any)=>{
    return(
        <Container style={{padding:'var(--space-3)'}}>
            {children}
        </Container>
    )
}

export const PostHeader =({header}:any)=>{
    return(
            <header className={NextStyles.header}>
                <Link href={`/u/${header.username}`}>
                    <Avatar src={header.assets.avatar_url} height="1rem" width="1rem"/>
                </Link>
                <Link href={`/u/${header.username}`}>
                    {header.username}
                </Link>
            </header>
    )
}


