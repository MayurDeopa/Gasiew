
import React, { createContext, useContext, useReducer } from "react";

import  userReducer  from "./userReducer";


interface UserContextProps{
    profiles:{}[]
    currentUserProfile:{}
    isRestricted:boolean
    settings:{}
    isLoading:boolean
}

interface UserDispatchContextProps{
    dispatch:React.Dispatch<any>
}

interface UserProviderProps{
    children:JSX.Element | JSX.Element[]
}

const userDispatchInitialState ={
    dispatch:()=>{}
}

const userContextInitialState ={
    profiles:[],
    currentUserProfile:{},
    isRestricted:false,
    settings:{},
    isLoading:false
}

const UserStateContext = createContext<UserContextProps>(userContextInitialState)
const UserDispatchContext = createContext<UserDispatchContextProps>(userDispatchInitialState)

export const useUserState =()=>useContext(UserStateContext)
export const useUserActions = ()=>useContext(UserDispatchContext)


const UserProvider =({children}:UserProviderProps)=>{


    const [userState,dispatch] = useReducer(userReducer,userContextInitialState,)



    return(
        <UserStateContext.Provider value={userState}>
            <UserDispatchContext.Provider value={{dispatch}}>
                {children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    )
}

export default UserProvider;