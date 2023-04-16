import { useRouter } from 'next/router'
import {useState,useEffect} from 'react'
import { client } from '../api'


export interface useAsyncParams{
    url:string
    payload?:{}
    method:string
    token?:string
    config?:{}
    changes?:any[]
}

const useAsync =(params:useAsyncParams)=>{

    const router = useRouter()
    const {url,payload,token,config,method,changes=[]} = params

    const [loading,setLoading] = useState(true)
    const [data,setData] = useState<any>()
    const [error,setError]  =useState()

    async function wrapperFunction() {
        let {data,err} = await client({url:url,method:method,payload:payload,token:token,config})
        if(err){
            setError(err)
        }
        else{
            setData(data)
        }
        setLoading(false)
    }

    useEffect(()=>{
        if(!router.isReady){
            return
        }
        wrapperFunction()
    },[router.isReady,...changes!])

    return {data,loading,error}
}

export default useAsync;