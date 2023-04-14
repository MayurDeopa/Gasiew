import { Button } from "@/components/form"
import { useAuthAction, useAuthState } from "@/context/auth/AuthProvider";
import { logoutUser } from "@/context/auth/actions";



const LogoutButton =({text = "Logout",width="5rem"})=>{
    const {dispatch} = useAuthAction()

    const handleLogout = ()=>{
        logoutUser(dispatch)
    }
    return(
        <Button.DropDownSecondaryBtn 
            action={handleLogout} 
            text={text} 
        />
    )
}

export default LogoutButton;