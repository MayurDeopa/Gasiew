import React, { useEffect } from "react"


import NextStyles from '../../styles/form.module.css'


export interface SwitchProps{
    open:boolean
    toggle:()=>void
    loading?:boolean
    disabled?:boolean
}



const Switch:React.FC<SwitchProps> =({open,disabled,loading,toggle})=>{

    const activeClassName = open?`${NextStyles.switch} ${NextStyles.switch_active}`:NextStyles.switch



    return (
        <div className={NextStyles.switch_label}>
            <input type="checkbox" className={activeClassName} onChange={toggle} checked={open} disabled={disabled}/>
        </div>
    )
}

export default Switch