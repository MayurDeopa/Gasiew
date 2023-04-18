import { LoadingDots } from "@/components/feedback"
import Skeleton from "@/components/feedback/skeleton/Skeleton"
import { Form } from "@/components/form"
import { Container, Tab } from "@/components/misc"
import { useAuthState } from "@/context/auth/AuthProvider"
import { useAsync } from "@/lib/hooks"
import ChangeAvatarForm from "./ChangeAvatarForm"
import ChangeBannerForm from "./ChangeBannerForm"



const 
ProfileForm = ()=>{

    const {token} = useAuthState()
    const {data,loading,error} = useAsync({url:'user/account/id',method:'get',token:token})

    if(loading){
        return <Skeleton height="10rem" width="100%"/>
    }

    if(error){
        return <p>err</p>
    }

    return(
        <Container style={{justifyContent:'center'}}>
            <Tab
                items={[
                    {
                        label:"Avatar",
                        key:0,
                        content:<ChangeAvatarForm data={data.data}/>
                    },
                    {
                        label:"Banner",
                        key:1,
                        content:<ChangeBannerForm data={data.data}/>
                    }
                ]}
            />
        </Container>
    )
}

export default ProfileForm