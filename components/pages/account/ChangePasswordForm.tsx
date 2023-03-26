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
        <Form styles={{boxShadow:'none',width:'100%',maxWidth:'20rem'}}>
            <Input 
                placeholder="Password" 
                required value={passwordState.password} 
                action={(e)=>setInput('password',e.target.currentValue)} 
                type='password'
            />
            <Input 
                placeholder="New Password" 
                required 
                value={passwordState.newPassword} 
                action={(e)=>setInput('newPassword',e.target.currentValue)} 
                type='password'
            />
            <Input 
                placeholder="Confirm new password" 
                required 
                value={passwordState.confirmNewPassword} 
                action={(e)=>setInput('confirmNewPassword',e.target.currentValue)} 
                type='password'
            />
            <Button.Primary type='submit' text="Submit" styles={{maxWidth:'5rem'}} />
        </Form>
    )
}

export default ChangePasswordForm