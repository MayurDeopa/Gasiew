
export interface currentUserData{
    email:string
    id:string
    username:string
    assets:{
        id:string
        height:number
        width:number
        avatar_url:string
        fileId:string
    }
}

export interface AuthContextProps{
    isAuthorized:boolean
    user:currentUserData
    token:string
    isLoading:boolean
    isError:boolean
    error:string

}



export const authContextInitialState ={
    isAuthorized:false,
    user:{
        email:"",
        id:"",
        username:"",
        assets:{
            id:"",
            height:0,
            width:0,
            avatar_url:"",
            fileId:""
        }
    },
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