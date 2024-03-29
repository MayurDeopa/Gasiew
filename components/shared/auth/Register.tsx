import { Form } from "@/components"
import { registerUser } from "@/context/auth/actions";
import { useAuthAction, useAuthState } from "@/context/auth/AuthProvider";
import { useState } from "react";

import {AiOutlineMail,AiOutlineLock, AiOutlineUser} from 'react-icons/ai'

const Register = ()=>{

    const {dispatch} = useAuthAction()
    const {isLoading} = useAuthState()

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [username,setUsername] = useState('')


    const action = ()=>{
        registerUser(dispatch,{email,password,username})
    }

    return(
        <Form.Form styles={{width:'100%',justifyContent:'center',boxShadow:'none'}} action={action}>
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
                type={'text'} 
                prefix={<AiOutlineUser/>} 
                forLabel='username' value={username} 
                action={(e:React.FormEvent)=>setUsername((e.target as HTMLInputElement).value)} 
                title="Username" 
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
            <Form.Button.Primary type='submit' text="Register" loading={isLoading}/>
        </Form.Form>
    )
}

export default Register;