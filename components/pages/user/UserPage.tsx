import Skeleton from "@/components/feedback/skeleton/Skeleton";
import User from "@/components/shared/user/User";
import UserContainerSkeleton from "@/components/skeletons/user/UserContainerSkeleton";
import { useAsync } from "@/lib/hooks";
import { useRouter } from "next/router";


const UserPage =()=>{
    const {username} = useRouter().query
    const {data,loading,error} = useAsync({url:`user/${username}`,method:'get',changes:[username]})

    if(loading){
        return <UserContainerSkeleton/>
    }

    if(error){
        return <p>{error}</p>
    }

    return(
        <User data={data.data}/>
    )
}

export default UserPage;