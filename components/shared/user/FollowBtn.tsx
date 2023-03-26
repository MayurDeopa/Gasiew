
import { Button } from "@/components/form"
import { useUserFeatures } from "@/lib/hooks"

const FollowBtn =({userId}:any)=>{

    const {isProfileCurrentUser} = useUserFeatures()

    if(isProfileCurrentUser(userId)){
        return <Button.LinkBtn text="Edit Profile" url="/account/edit" />
    }

    return(
        <Button.Primary text="Follow"/>
    )
}

export default FollowBtn;