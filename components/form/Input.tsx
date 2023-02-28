import React from "react";
import { AiOutlineCloud, AiOutlineCloudUpload } from "react-icons/ai";

import NextStyles from '../../styles/form.module.css'
import { Container } from "../misc";

type inputType = 'textarea' | 'text' | 'password' | 'search' | 'number' | 'url'|'date' |'email' | 'file'

type inputValue = string | number

interface InputProps{
    prefix?:string | JSX.Element
    type?:inputType
    maxWidth?:string
    autoFocus?:boolean
    action:React.FormEventHandler<HTMLInputElement> |undefined
    value:inputValue
    forLabel?:string
    disabled?:boolean
    required?:boolean
    name?:string
    placeholder?:string
    title?:string
}

const Input:React.FC<InputProps> =(props)=>{

    const {
        type ='text',
        maxWidth,
        autoFocus=false,
        action,
        disabled = false,
        required = false,
        prefix,
        forLabel ='name',
        placeholder,
        value,
        title
    } = props

    if(type=='file'){
        return(
            <Container style={{
                flexDirection:'column'
            }}>
                <React.Fragment>{title && <p>{title}</p>}</React.Fragment>
                <label htmlFor={forLabel} className={NextStyles.file_label} style={{maxWidth:maxWidth}}>
                    <div className={NextStyles.upload_icon}>
                        <AiOutlineCloudUpload size={30}/>
                        <p>Select image</p>
                    </div>
                    <input className={NextStyles.file_input} value={value} disabled={disabled} required={required} onChange={action} placeholder={placeholder} autoFocus={autoFocus} type={type} name={forLabel}/>
                </label>
            </Container>
        )
    }

    return(
        <Container style={{
            flexDirection:'column'
        }}>
            <React.Fragment>{title && <p>{title}</p>}</React.Fragment>
            <label htmlFor={forLabel} className={NextStyles.label} style={{maxWidth:maxWidth}}>
                {prefix && <div className={NextStyles.prefix}>{prefix}</div>}
                <input className={NextStyles.input} value={value} disabled={disabled} required={required} onChange={action} placeholder={placeholder} autoFocus={autoFocus} type={type} name={forLabel}/>
            </label>
        </Container>
    )
}

export default Input;