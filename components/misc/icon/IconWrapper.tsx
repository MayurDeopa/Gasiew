import React from "react"
import { IconBaseProps } from "react-icons"




interface IconWrapperProps{
    size?:number
    Icon:React.ElementType

}

const IconWrapper:React.FC<IconWrapperProps> =(props)=>{

    const{
        size = 40,
        Icon
    } = props

    return(
        <Icon size={size}/>
    )
}

export default IconWrapper;