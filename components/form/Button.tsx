import React from 'react'
import styles from '../../styles/buttons.module.css'

interface ButtonProps {
    text?:string
    action?:()=>void
}


export const Primary:React.FC<ButtonProps> = (props)=>{

    const{

        text="Button",
        action

    } =props

    return(
        <button className={`${styles.wrapper} ${styles.primary}`} onClick={action}>
            {text}
        </button>
    )
}



export const Secondary:React.FC<ButtonProps> = (props)=>{

    const{

        text="Button"

    } =props

    return(
        <button className={`${styles.wrapper} ${styles.secondary}`}>
            {text}
        </button>
    )
}



export const Link:React.FC<ButtonProps> = (props)=>{

    const{

        text="Button"

    } =props

    return(
        <button className={styles.wrapper}>
            {text}
        </button>
    )
}