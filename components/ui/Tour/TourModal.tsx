import React from "react";



import Portal from "@/components/portal";



import {  useTransition } from "@/lib/hooks";

import styles from '../../../styles/tour.module.css'


interface ModalProps{
    container?:string
    children?:JSX.Element | JSX.Element[]
    open:boolean,
    onClose?:()=>void,
    hasTransitioned?:boolean
}


const TourModal:React.FC<ModalProps> = (props)=>{

    const {
        children,
        open,
    }= props



    const hasTransitioned = useTransition(open,300)

    const classNames = !open?`${styles.overlay} ${styles.overlay_hidden}`:styles.overlay

    
    

    
    return(
        <React.Fragment>
            {
                hasTransitioned
                &&
                <Portal wrapperId="modal-root">
                    <div className={classNames}>
                        {children}
                    </div>
                </Portal>
            }
        </React.Fragment>
    )
}

export default TourModal;