import { Switch } from "@/components/form"
import { Container } from "@/components/misc"
import { useState } from "react"


const ChangeThemeButton =()=>{

    const [open,toggle] = useState(false)

    return(
        <Container style={{justifyContent:'center',alignItems:'center'}} onClick={()=>toggle(!open)}>
            <p style={{fontSize:'13px'}}>Theme</p>
            <Switch open={open} toggle={()=>toggle(!open)} />
        </Container>
    )
}

export default ChangeThemeButton