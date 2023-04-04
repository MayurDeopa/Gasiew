import React,{useState} from 'react'

import Dropdown,{DropDownOption} from '@/components/ui/DropDown'


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
            <button  style={{position:'absolute',right:'10px',top:'10px',cursor:'pointer'}} onFocus={()=>setShow(true)} onBlur={()=>setShow(false)} onClick={()=>setShow(!show)}>:</button>
                     
            <Dropdown open={show}  items={options} style={{position:'absolute',right:'10px',top:'30px'}}/>
            
        </React.Fragment>
        
    )
}

export default PostOptions