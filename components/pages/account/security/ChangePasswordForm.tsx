import LoginButton from "@/components/common/auth/LoginButton"
import { Form,Input,Button } from "@/components/form"
import { useState } from "react"

const ChangePasswordForm =()=>{

    const [passwordState,setPasswordState] = useState({
        password:'',
        newPassword:'',
        confirmNewPassword:''
    })

    const setInput = (key:string,value:string)=>{
        setPasswordState({...passwordState,[key]:value})
    }

    return(
        <LoginButton/>
    )
}

export default ChangePasswordForm