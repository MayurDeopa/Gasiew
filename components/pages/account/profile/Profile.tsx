import { Input } from "@/components/form"
import ProfileForm from "@/components/shared/profile/ProfileForm"
import { Avatar } from "@/components/ui"
import { useAuthState } from "@/context/auth/AuthProvider"
import AccountWrapper from "../AccountLayout"


const Profile =()=>{
    return(
        <AccountWrapper>
           <ProfileForm/>
        </AccountWrapper>
    )
}

export default Profile