import client from "./client"

interface urlData{
    query?:string
    value?:string
}



export const getPosts = async(urlData:urlData,token:string)=>{
    return await client({url:`post?${urlData.query}=${urlData.value}`,method:'get',token:token})
}

