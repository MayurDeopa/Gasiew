import Skeleton from "@/components/feedback/skeleton/Skeleton";
import User from "@/components/shared/user/User";
import { useAsync } from "@/lib/hooks";
import { useRouter } from "next/router";


const UserPage =()=>{
    const {username} = useRouter().query
    const {data,loading,error} = useAsync({url:`user/${username}`,method:'get'})

    if(loading){
        return <Skeleton height="40rem" width="100%"/>
    }

    if(error){
        return <p>{error}</p>
    }

    return(
        <User data={data.data}/>
    )
}

export default UserPage;