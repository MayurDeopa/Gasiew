

interface clientProps{
    url:string,
    method?:string,
    payload?:{}
    config?:{}
    token?:string
}

const client =async({url,method='get',payload,token,config}:clientProps)=>{

    let data
    let success:boolean
    let err 
    let customConfig = {
        'method':method,
        "headers":{
            "Authorization": token ? `Bearer ${token}` : '',
            "Content-Type" :payload?"application/json":''},
        'body':JSON.stringify(payload),
        ...config
    }
    try{
        const response = await fetch(`${process.env.API_URL || 'http://localhost:8000/'}${url}`,customConfig)
        data = await response.json()
        err = data.message
        success = response.ok
    }catch(error){
        err = error
        success = false
    } 

    if(!data) success = false , err ='Something went wrong'
    return {data,success,err}
}


export default client;