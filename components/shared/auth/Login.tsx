import { Form } from "@/components"
import { loginUser } from "@/context/auth/actions";
import { useAuthAction, useAuthState } from "@/context/auth/AuthProvider";
import { useState } from "react";

import {AiOutlineMail,AiOutlineLock} from 'react-icons/ai'
import { useGlobalModals } from "../modals";

const Login = ()=>{
    
    const {dispatch} = useAuthAction()
    const {isLoading} = useAuthState()
    
    let modals = useGlobalModals()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    const action =()=>{
        loginUser(dispatch,{email:email,password:password},()=>modals.setShowAuthModal(false)) 
    }

    return(
        <Form.Form styles={{width:'100%',justifyContent:'center'}} action={action}>
            <Form.Input 
                type={'email'} 
                prefix={<AiOutlineMail/>} 
                forLabel='email' value={email} 
                action={(e:React.FormEvent)=>setEmail((e.target as HTMLInputElement).value)} 
                autoFocus 
                title="Email" 
                maxWidth="100%" 
                required
            />
            <Form.Input 
                type={'password'} 
                prefix={<AiOutlineLock/>} 
                forLabel='email' 
                value={password} 
                action={(e)=>setPassword((e.target as HTMLInputElement).value)} 
                title='Password' 
                maxWidth="100%" 
                required
            />
            <Form.Button.Primary type='submit' text="Login" loading={isLoading}/>
        </Form.Form>
    )
}

export default Login;