import { Drawer } from "@/components/overlays"
import { useScreenWidth } from "@/lib/hooks"
import React, { ReactNode, useState } from "react"

import NextStyles from '../../../styles/post.module.css'
import PostOptions from "./PostOptions"

interface PostProps{
    image?:ReactNode
    info?:ReactNode
    action?:ReactNode
}

const PostContainer:React.FC<PostProps> =({image,info,action})=>{

    const width = useScreenWidth()
    const mountMobileComponents = width<=720
    const [openOptions,setOpenOptions] = useState(false)
    const [openComments,setOpenComments] = useState(false)

    return(
        <div className={NextStyles.container}>
            <article className={NextStyles.wrapper}>
               {image}
            </article>
             
                
            <div className={NextStyles.info_container}>
                {info}
                {mountMobileComponents && <p onClick={()=>setOpenComments(true)} style={{fontSize:'var(--h7)',cursor:'pointer'}}>View comment</p>}
                {
                    !mountMobileComponents
                    &&
                    action
                }
             </div>
             {mountMobileComponents &&(
                <Drawer 
                    open={openComments} 
                    styles={{backgroundColor:'var(--accent-1)'}} 
                    onClose={()=>setOpenComments(false)}
                    position='bottom'
                    height="50%"
                    width="100%"    
                >
                    {info}
                    {action}
             </Drawer>
             )}
             
             <PostOptions open={openOptions} onClick={()=>setOpenOptions(!openOptions)}/>
       </div>


    )
}

export default PostContainer