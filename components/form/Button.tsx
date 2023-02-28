import React, { CSSProperties } from 'react'
import NextStyles from '../../styles/buttons.module.css'
import LoadingDots from '../feedback/loadingdots/LoadingDots'

interface ButtonProps {
    text?:string
    action?:()=>void
    type?:'button'| 'submit'| 'reset'
    loading?:boolean
    styles?:CSSProperties
    disabled?:boolean
}


export const Primary:React.FC<ButtonProps> = (props)=>{

    const{
        type='button',
        text="Button",
        action,
        loading = false,
        disabled = false,
        styles
    } =props

    const disableButton = loading || disabled

    return(
        <button className={`${NextStyles.wrapper} ${NextStyles.primary}`} onClick={action} type={type} disabled={disableButton} style={styles}>
            {loading?<LoadingDots/>:text}
        </button>
    )
}



export const Secondary:React.FC<ButtonProps> = (props)=>{

    
    const{
        type='button',
        text="Button",
        action,
        loading = false,
        styles
    } =props

    return(
        <button className={`${NextStyles.wrapper} ${NextStyles.secondary}`} onClick={action} type={type} disabled={loading} style={styles}>
            {loading?<LoadingDots color='secondary'/>:text}
        </button>
    )
}



export const Link:React.FC<ButtonProps> = (props)=>{

    const{

        text="Button"

    } =props

    return(
        <button className={NextStyles.wrapper}>
            {text}
        </button>
    )
}