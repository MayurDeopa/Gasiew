
const devEnv = process.env.NEXT_PUBLIC_NODE_ENV =="development"

export interface clientProps{
    url:string,
    method?:string,
    payload?:{}
    config?:{}
    token?:string
    query?:string
    value?:string
}

const client =async({url,method='get',payload,token,config}:clientProps)=>{

    let data
    let success:boolean
    let err 
    let loading = true
    let customConfig = {
        'method':method,
        "headers":{
            "Authorization": token ? `Bearer ${token}` : '',
            "Content-Type" :payload?"application/json":''},
        'body':JSON.stringify(payload),
        ...config
    }
    try{
        const response = await fetch(`${devEnv? process.env.NEXT_PUBLIC_DEV_API_URL :process.env.NEXT_PUBLIC_PROD_API_URL}/${url}`,customConfig)
        data = await response.json()
        err = data.error || data.message
        success = response.ok
    }catch(error){
        err = error
        success = false
    } 

    if(!data){
        console.log(err)
        success = false , err ='Something went wrong'
        
    }
    loading = false
    return {data,success,err,loading}
}


export default client;