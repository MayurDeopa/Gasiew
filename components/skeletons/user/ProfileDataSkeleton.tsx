import Skeleton from "@/components/feedback/skeleton/Skeleton"
import ProfileDate, { ProfileDataProps } from "@/components/shared/user/ProfileData"


const ProfileDataSkeleton:React.FC<ProfileDataProps> =({image,info,action})=>{
    return(
        <ProfileDate
            image={image || <Skeleton borderRadius="50%" height="120px" width="120px" style={{
                marginTop:'-25%'
            }}/>}
            /*info={info || <Skeleton width="7rem"/>}*/
        />
    )
}

export default ProfileDataSkeleton