import NewImage from "../Image"


export interface AvatarProps{
    src:string
    height?:string
    width?:string
    radius?:string
}


const Avatar:React.FC<AvatarProps> = ({src,height='70px',width="70px",radius="50%"})=>{
    return(
        <div>
            <NewImage imageProps={{fill:true,alt:'some',src:src ,style:{objectFit:'cover'}}} containerProps={{style:{height:height,width:width,borderRadius:radius}}}/>
        </div>
    )
}

export default Avatar