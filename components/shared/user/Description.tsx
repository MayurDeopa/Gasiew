import { Button } from "@/components/form"
import FollowBtn from "./FollowBtn"




const Description =({data}:any)=>{

    

    return(
        <div>
            <p>{data.username}</p>
            <FollowBtn userId={data.id}/>
        </div>
    )
}

export default Description