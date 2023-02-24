import AuthModal from "./AuthModal";
import React, { createContext, useContext, useState } from "react";



interface GlobalModalContext  {
    showAuthModal:boolean
    setShowAuthModal:(show:boolean)=>void
    showCookieModal:boolean
    setShowCookieModal:(show:boolean)=>void
   };

interface ProviderProps{
    children:JSX.Element | JSX.Element[]
}

const initalModalStates:GlobalModalContext = {
    showAuthModal:false,
    setShowAuthModal:()=>{},
    showCookieModal:false,
    setShowCookieModal:()=>{}
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

    const setShowAuthModal =(show:boolean)=>setAuthModal(show)
    const setShowCookieModal =(show:boolean)=>setCookieModal(show)


    return(
        <GlobalModals.Provider value={{
            showAuthModal:authModal,
            setShowAuthModal:setShowAuthModal,
            showCookieModal:cookieModal,
            setShowCookieModal:setShowCookieModal
        }}>
            <AuthModal open={authModal} onClose={()=>setAuthModal(false)}/>
            {children}
        </GlobalModals.Provider>
    )
}

export default GlobalModalsProvider;