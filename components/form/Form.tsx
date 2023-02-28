import React, { FormEvent, FormEventHandler } from "react";

import NextStyles from '../../styles/form.module.css'

interface FormProps {
    children:JSX.Element | JSX.Element[]
    action:()=>void
    styles?:{}
}

const Form:React.FC<FormProps> =({children,action,styles,...props})=>{

    const onSubmit =(e:React.FormEvent)=>{
        e.preventDefault()
        action()
    }

    return(
        <form
            onSubmit={onSubmit}
            className={NextStyles.wrapper}
            style={styles}
            {...props}
        >
            {children}
        </form>
    )
}

export default Form;