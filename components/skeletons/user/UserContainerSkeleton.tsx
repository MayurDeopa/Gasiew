

import NextStyles from '../../../styles/profile.module.css'
import { UserContainerProps } from "@/components/shared/user/UserContainer";

import UserBanner from "@/components/shared/user/UserBanner";
import NewImage from "@/components/ui/Image";
import ProfileData from '@/components/shared/user/ProfileData';
import Description from '@/components/shared/user/Description';
import ProfileDataSkeleton from './ProfileDataSkeleton';

export interface UserContainerSkeletonProps{
    banner?:{
        url:string
    }
    profileData?:{
        image:{
            url:string
        },
        description?:any
    }
}

const UserContainerSkeleton:React.FC<UserContainerSkeletonProps> =({banner,profileData})=>{

    return(
        <div className={NextStyles.container}>
            <UserBanner
                banner={banner &&<NewImage imageProps={{fill:true,alt:'some',src:banner!.url,style:{objectFit:'cover'}}} containerProps={{style:{height:'17rem'}}} />}
            />
           <div className={NextStyles.profile_data} style={{marginTop:0}}>
           <ProfileDataSkeleton 
                image={profileData?.image && <NewImage imageProps={{height:120,width:120,alt:'some',src:profileData!.image.url,style:{objectFit:'cover'}}} containerProps={{style:{height:'120px',width:'120px',borderRadius:'50%',marginTop:'-20%'}}}/>}

            /> 
           </div>
        </div>
    )
}

export default UserContainerSkeleton;