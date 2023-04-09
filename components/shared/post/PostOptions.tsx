import React,{useState} from 'react'

import Dropdown from '@/components/ui/DropDown'
import { Button } from '@/components/form'


interface PostOptionsProps{
    open:boolean
    onClick?:()=>void
}

const options =[
    {
        title:"Edit"
    },
    {
        title:'Report',
    },
    {
        title:"Share",
    }
]


const PostOptions:React.FC<PostOptionsProps> =({open,onClick})=>{

    const [show,setShow] = useState(false)


  

    return(
        <React.Fragment>
            <Button.Secondary text=':' action={()=>setShow(!show)} styles={{position:'absolute',right:'10px',top:'10px',cursor:'pointer',fontWeight:'bolder',height:'1.4rem',padding:'var(--space-2)'}}/>
                     
            <Dropdown open={show}  items={options} style={{position:'absolute',right:'10px',top:'30px'}}/>
            
        </React.Fragment>
        
    )
}

export default PostOptions