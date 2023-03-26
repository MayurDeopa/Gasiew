import AuthModal from "./AuthModal";
import React, { createContext, useContext, useState } from "react";
import CreateModal from "./CreateModal";



interface GlobalModalContext  {
    showAuthModal:boolean
    setShowAuthModal:(show:boolean)=>void
    showCookieModal:boolean
    setShowCookieModal:(show:boolean)=>void
    showCreateModal:boolean
    setShowCreateModal:(show:boolean)=>void
   };

interface ProviderProps{
    children:JSX.Element | JSX.Element[]
}

const initalModalStates:GlobalModalContext = {
    showAuthModal:false,
    setShowAuthModal:()=>{},
    showCookieModal:false,
    setShowCookieModal:()=>{},
    showCreateModal:false,
    setShowCreateModal:()=>{}
}


const GlobalModals = createContext(initalModalStates)

export const useGlobalModals = ()=>{
    const context = useContext(GlobalModals)
    if(!context){
        throw Error('Use hook inside the provider ')
    }
    return context
}

const GlobalModalsProvider:React.FC<ProviderProps> = ({children})=>{

    const [authModal,setAuthModal] = useState(false)
    const [cookieModal,setCookieModal] = useState(false)
    const [createModal,setCreateModal] = useState(false)
    const setShowAuthModal =(show:boolean)=>setAuthModal(show)
    const setShowCookieModal =(show:boolean)=>setCookieModal(show)
    const setShowCreateModal =(show:boolean)=>setCreateModal(show)


    return(
        <GlobalModals.Provider value={{
            showAuthModal:authModal,
            setShowAuthModal:setShowAuthModal,
            showCookieModal:cookieModal,
            setShowCookieModal:setShowCookieModal,
            showCreateModal:createModal,
            setShowCreateModal:setShowCreateModal
        }}>
            <AuthModal open={authModal} onClose={()=>setAuthModal(false)}/>
            <CreateModal open={createModal} onClose={()=>setCreateModal(false)}/>
            {children}
        </GlobalModals.Provider>
    )
}

export default GlobalModalsProvider;