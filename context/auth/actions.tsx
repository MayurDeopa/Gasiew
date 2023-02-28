
import { client } from "@/lib/api"
import { deleteAuth, getToken, saveAuth } from "@/utils/auth"


export const loginUser =async(dispatch:React.Dispatch<any>,payload:any,callback:any)=>{


    dispatch({type:'INIT_REQUEST'})
        const {data,success,err} = await client({url:'auth/login',method:"post",payload:payload})
        if(success){
            dispatch({type:'LOGIN_SUCCESS',payload:data})
            saveAuth(data.token)
            callback()
        }
        else{
            dispatch({type:'ERROR',payload:err})
        }
}


export const bootstrapUser =async(dispatch:React.Dispatch<any>)=>{
    const token:any = getToken()

    dispatch({type:'INIT_REQUEST'})
        const {data,success,err} = await client({url:'auth/bootstrap',method:"post",token:token})
        if(success){
            dispatch({type:'LOGIN_SUCCESS',payload:data})
        }
        else{
            dispatch({type:'ERROR',payload:err})
        }
}


export const logoutUser =async(dispatch:React.Dispatch<any>)=>{
    deleteAuth()
    dispatch({type:'LOGOUT'})
}