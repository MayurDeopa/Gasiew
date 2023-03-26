import client from "@/lib/api/client"
import { userReducerTypes } from "../reducerType"

 const userReducer =(userState:any,action:any)=>{
    switch(action.type){
        case "addProfile":
            return{
                ...userState,
                profiles:[...userState.profiles,action.payload]
            }
        case "getProfile":
            const exist = userState.profiles.find((p:any)=>p.id==action.payload.userId)
            if(exist){
                return{
                    ...userState,
                    currentUserProfile:exist
                }
            }
            async()=>{
                let data:any  = await client({url:'profile',method:'post',payload:action.payload.payload})
                return{
                    ...userState,
                    currentProfile:data.profile
                }
            }
        case 'INIT_REQUEST':
            return{
                ...userState,
                isLoading:true
            }
        
        case 'FINISH_REQUEST':
            return{
                ...userState,
                isLoading:false
            }
        default:
            return userState
    }
}

export default userReducer