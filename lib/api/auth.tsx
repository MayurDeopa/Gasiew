import client from "./client"

interface loginFormDataProps{
    email:string
    password:string
}

interface registerFormDataProps{
    email:string
    password:string
    username:string
}

export const login = async(formData:loginFormDataProps)=>{
    return await client({url:'auth/login',method:'post',payload:formData})
}

export const register = async(formData:registerFormDataProps)=>{
    return await client({url:'auth/register',method:'post',payload:formData})
}