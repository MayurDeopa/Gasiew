import NewImage from "@/components/ui/Image"
import { useScreenWidth } from "@/lib/hooks"

import NextStyles from '../../../styles/post.module.css'
interface PostImageProps{
    src:string
    alt:string
    height?:number
    width?:number
}

const PostImage:React.FC<PostImageProps> =({src,alt,height,width})=>{


    

    return(
        <NewImage imageProps={{src:src,alt:alt,fill:true,style:{objectFit:'contain'}}} height={height} width={width} containerProps={{className:NextStyles.image,style:{paddingTop:"100%"}}}/>
    )
}

export default PostImage;