import React from "react";



import Portal from "../../portal";
import Drawer from "../drawer/Drawer";



import { useScreenWidth, useTransition } from "@/lib/hooks";

import styles from '../../../styles/overlay.module.css'


interface ModalProps{
    container?:string
    children?:JSX.Element | JSX.Element[]
    open:boolean,
    onClose?:()=>void,
    hasTransitioned?:boolean
}


const Modal:React.FC<ModalProps> = (props)=>{

    const {
        children,
        onClose,
        open,
    }= props

    const {isMobileScreen} = useScreenWidth()

    const hasTransitioned = useTransition(open,300)

    const classNames = !open?`${styles.overlay} ${styles.overlay_hidden}`:styles.overlay

    
    

    if(isMobileScreen){
        return(
            <Drawer 
                onClose={onClose}
                open={open}
                position='bottom'
                width="100%"
                height="auto"
            >
                {children}
            </Drawer>
        )
    }
    
    return(
        <React.Fragment>
            {
                hasTransitioned
                &&
                <Portal wrapperId="modal-root">
                    <div className={classNames}
                    >
                        <div
                            onClick={onClose}
                            style={{
                                position:'absolute',
                                height:'100%',
                                width:'100%',
                                zIndex:'-1'
                            }}
                        />
                        <div className={styles.modal}>
                            {children}
                        </div>
                    </div>
                </Portal>
            }
        </React.Fragment>
    )
}

export default Modal;