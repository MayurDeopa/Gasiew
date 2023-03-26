


export interface AuthContextProps{
    isAuthorized:boolean
    user:any
    token:string
    isLoading:boolean
    isError:boolean
    error:string

}

export const authContextInitialState ={
    isAuthorized:false,
    user:{},
    token:'',
    isLoading:false,
    isError:false,
    error:''
}

 const authReducer =(authState:AuthContextProps,action:any)=>{
    switch(action.type){
        case "INIT_REQUEST":
            return{
                ...authState,
                isAuthorized:false,
                user:{},
                isLoading:true,
                isError:false
            }
            
        case "LOGIN_SUCCESS":
            return{
                ...authState,
                token:action.payload.token,
                isLoading:false,
                user:action.payload.data,
                isAuthorized:true
            }

        case "REGISTER_SUCCESS":
            return{
                ...authState,
                isLoading:false
            }

        case "ERROR":
            return{
                ...authState,
                isLoading:false,
                isAuthorized:false,
                isError:true,
                error:action.payload
            }
        case "LOGOUT":
            return authContextInitialState
        default:
            return {
                ...authState,
                isError:true,
                error:'No action specified'
            }
    }
}

export default authReducer;