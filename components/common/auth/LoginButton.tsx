import { Button } from "@/components/form"
import { useGlobalModals } from "@/components/shared/modals";
import { useAuthState } from "@/context/auth/AuthProvider";



const LoginButton =({text = "Login",width="5rem"})=>{
    const modals = useGlobalModals()
    const {isLoading} = useAuthState()
    return(
        <Button.Primary 
            loading={isLoading} 
            action={()=>modals.setShowAuthModal(true)} 
            text={text} 
            styles={{width:width}}
        />
    )
}

export default LoginButton;