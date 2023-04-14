import { createContext, useContext, useEffect, useReducer } from "react";
import { bootstrapUser } from "./actions";
import authReducer, { authContextInitialState, AuthContextProps } from "./authReducer";




interface AuthProviderProps{
    children:JSX.Element | JSX.Element[]
}

interface AuthActionContextProps{
    dispatch:React.Dispatch<any>
}



const authActionContextInitialState = {
    dispatch:()=>{}
}


const AuthStateContext = createContext<AuthContextProps>(authContextInitialState)
const AuthActionContext = createContext<AuthActionContextProps>(authActionContextInitialState)

export const useAuthState =()=>useContext(AuthStateContext)
export const useAuthAction =()=>useContext(AuthActionContext)


const AuthProvider =({children}:AuthProviderProps)=>{

    const [authState,dispatch] = useReducer(authReducer,authContextInitialState)

    useEffect(()=>{
        let token = localStorage.getItem('authToken')
        if(token){
           bootstrapUser(dispatch)
           return
        }
    },[])


    return(
        <AuthStateContext.Provider value={authState}>
            <AuthActionContext.Provider value={{dispatch}}>
                {children}
            </AuthActionContext.Provider>
        </AuthStateContext.Provider>
    )
}

export default AuthProvider;