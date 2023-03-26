import React, { FormEvent, FormEventHandler } from "react";
import clsx from "clsx";

import NextStyles from '../../styles/form.module.css'

interface FormProps {
    children:JSX.Element | JSX.Element[]
    action:()=>void
    styles?:{}
    classNames?:{}
}

const Form:React.FC<FormProps> =({children,action,styles,classNames,...props})=>{

    const onSubmit =(e:React.FormEvent)=>{
        e.preventDefault()
        action()
    }

    return(
        <form
            onSubmit={onSubmit}
            className={clsx(NextStyles.wrapper,classNames)}
            style={styles}
            {...props}
        >
            {children}
        </form>
    )
}

export default Form;