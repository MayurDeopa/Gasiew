import {useState} from 'react'

import { Form, Switch } from "@/components/form"
import { Container } from "@/components/misc"


const PreferenceForm = ()=>{

    const [visibility,setVisibility] = useState(false)

    return(
        <Form styles={{boxShadow:'none',width:'100%'}} action={()=>{}}>
            <Container style={{justifyContent:'space-around'}}>
                <p>Change profile visibility</p>
                <Switch open={visibility} toggle={()=>setVisibility(!visibility)}/>
            </Container>
        </Form>
    )
}

export default PreferenceForm