import { LoadingDots } from "@/components/feedback"
import Skeleton from "@/components/feedback/skeleton/Skeleton"
import { Button, Form, Input } from "@/components/form"
import { useEffect, useState } from "react"



const ReportForm =()=>{
    const [isLoading,setIsloading] = useState(true)

    useEffect(()=>{
        const id = setTimeout(()=>{
            setIsloading(false)
        },2000)

        return ()=>clearTimeout(id)
    },[])


    if(isLoading){
        return <div style={{height:'100%',width:'100%',display:'grid',placeItems:'center'}}>
            <LoadingDots color="secondary"/>
        </div>
    }

    return(
        <Form styles={{width:'100%'}}>
            <Input/>
            <Input/>
            <Button.Primary/>
        </Form>
    )
}

export default ReportForm