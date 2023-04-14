import NewImage from "@/components/ui/Image";
import ProfileDate from "./ProfileData";

import NextStyles from '../../../styles/profile.module.css'
import PostList from "../post/PostList";
import Description from "./Description";

export interface UserContainerProps{
    data:any
}

const UserContainer:React.FC<UserContainerProps> =({data})=>{
    return(
        <div className={NextStyles.container}>
            <NewImage imageProps={{fill:true,alt:'some',src:data.banner.url,style:{objectFit:'cover'}}} containerProps={{className:NextStyles.banner}} />
           <div className={NextStyles.profile_data}>
           <ProfileDate 
                image={<NewImage imageProps={{height:120,width:120,alt:'some',src:data.assets.avatar_url,style:{objectFit:'cover'}}} containerProps={{style:{height:'120px',width:'120px',borderRadius:'50%',marginTop:'-20%'}}}/>}
                info={<Description data={data}/>}

            /> 
            <PostList posts={data.post}/>
           </div>
        </div>
    )
}

export default UserContainer;