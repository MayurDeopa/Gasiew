

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
        const response = await fetch(`${process.env.API_URL || 'https://tubular-pavlova-2eb657.netlify.app/'}${url}`,customConfig)
        data = await response.json()
        err = data.error || data.message
        success = response.ok
    }catch(error){
        err = error
        success = false
    } 

    if(!data) success = false , err ='Something went wrong'
    loading = false
    return {data,success,err,loading}
}


export default client;