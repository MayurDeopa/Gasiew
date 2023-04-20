import LoginButton from "@/components/common/auth/LoginButton"
import { Form,Input,Button, Switch } from "@/components/form"
import { useState } from "react"

const ChangePasswordForm =()=>{

    const [open,toggle] = useState(false)

    return(
        <Switch open={open} toggle={()=>toggle(!open)} disabled/>
    )
}

export default ChangePasswordForm