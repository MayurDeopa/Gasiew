import Link from 'next/link'
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
    url?:string
}

const dropDownButtonStyles:CSSProperties ={
    borderRadius:0,
    boxShadow:'none',
    width:'100%'
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
        disabled=false,
        styles
    } =props

    return(
        <button className={`${NextStyles.wrapper} ${NextStyles.secondary}`} onClick={action} type={type} disabled={disabled} style={styles}>
            {loading?<LoadingDots color='secondary'/>:text}
        </button>
    )
}



export const LinkBtn:React.FC<ButtonProps> = (props)=>{

    const{

        text="Button",
        url ='/',
        styles

    } =props

    return(
        <Link href={url} style={styles}>
            <button className={NextStyles.wrapper} style={{width:'100%'}}>
                {text}
            </button>
        </Link>
    )
}


export const DropwDownLink:React.FC<ButtonProps> = (props)=>{

    const{

        text="Button",
        url ='/',
        styles

    } =props

    return(
        <Link href={url} style={styles}>
            <button className={NextStyles.wrapper} style={dropDownButtonStyles}>
                {text}
            </button>
        </Link>
    )
}

export const DropDownSecondaryBtn:React.FC<ButtonProps> = (props)=>{

    const{
        type='button',
        text="Button",
        action,
        loading = false
    } =props

    return(
        <button className={`${NextStyles.wrapper}`} onClick={action} type={type} disabled={loading} style={dropDownButtonStyles}>
            {loading?<LoadingDots color='secondary'/>:text}
        </button>
    )
}

export const DropDownPrimaryBtn:React.FC<ButtonProps> = (props)=>{

    const{
        type='button',
        text="Button",
        action,
        loading = false
    } =props

    return(
        <button className={`${NextStyles.wrapper} ${NextStyles.primary}`} onClick={action} type={type} disabled={loading} style={dropDownButtonStyles}>
            {loading?<LoadingDots color='secondary'/>:text}
        </button>
    )
}