import { Container } from "@/components/misc"
import Link from "next/link"

import NextStyles from '../../../styles/post.module.css'

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
                    {header.username}
                </Link>
            </header>
    )
}

export const PostAction =({info}:any)=>{
    return(
            <section>

            </section>
    )
}
