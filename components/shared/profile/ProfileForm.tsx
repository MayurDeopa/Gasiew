import { LoadingDots } from "@/components/feedback"
import Skeleton from "@/components/feedback/skeleton/Skeleton"
import { Form } from "@/components/form"
import { Container } from "@/components/misc"
import { useAuthState } from "@/context/auth/AuthProvider"
import { useAsync } from "@/lib/hooks"
import ChangeAvatarForm from "./ChangeAvatarForm"



const ProfileForm = ()=>{

    const {token} = useAuthState()
    const {data,loading,error} = useAsync({url:'user/account/id',method:'get',token:token})

    if(loading){
        return <Skeleton/>
    }

    if(error){
        return <p>err</p>
    }

    return(
        <Container style={{justifyContent:'center'}}>
            <ChangeAvatarForm data={data.data}/>
        </Container>
    )
}

export default ProfileForm