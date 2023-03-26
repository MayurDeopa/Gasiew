import NewImage from "@/components/ui/Image";
import ProfileDate from "./ProfileData";

import NextStyles from '../../../styles/profile.module.css'
import Skeleton from "@/components/feedback/skeleton/Skeleton";
import PostList from "../post/PostList";
import Description from "./Description";

export interface UserContainerProps{
    data:any
}

const UserContainer:React.FC<UserContainerProps> =({data})=>{
    return(
        <div className={NextStyles.container}>
            <Skeleton width="100%" height="15rem"/>
           <div className={NextStyles.profile_data}>
           <ProfileDate 
                image={<NewImage imageProps={{height:120,width:120,alt:'some',src:'https://ik.imagekit.io/artboomer/pawstagram/imgbin-photography-cat-paris-cat-HvR60Gek0CaHsRM1qMh3vHAwM.jpg?updatedAt=1679255451128',style:{objectFit:'cover'}}} containerProps={{style:{height:'120px',width:'120px',borderRadius:'50%',marginTop:'-20%'}}}/>}
                info={<Description data={data}/>}

            /> 
            <PostList posts={data.post}/>
           </div>
        </div>
    )
}

export default UserContainer;