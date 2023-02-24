import Portal from "@/components/portal"
import React, { CSSProperties, } from "react"
import {useTransition} from "../../../lib/hooks"

import Nextstyles from '../../../styles/overlay.module.css'

type position = 'right' | 'left' | 'bottom' | 'top'

interface DrawerProps{
    container?:string
    children?:JSX.Element | JSX.Element[]
    open?:boolean,
    onClose?:()=>void,
    loading?:boolean,
    width?:string,
    title?:string,
    position?:position,
    height?:string,
    styles?:CSSProperties,

}

const progressStyles:CSSProperties={
    position:'absolute',
    top:0,
    left:0,
    right:0
}

const Drawer:React.FC<DrawerProps> =(props)=>{

    const {
        container = 'drawer-root',
        children,
        open=true,
        onClose,
        width='30rem',
        height='100%',
        loading = false,
        title,
        position='right',
        styles
    } = props

    const animationTypes ={
        'top':Nextstyles.topAnimtaion,
        'left':Nextstyles.leftAnimtaion,
        'right':Nextstyles.rightAnimtaion,
        'bottom':Nextstyles.bottomAnimtaion,
    }


    const drawerStyles = {
        width:width,
        height:height,
        [position]:open?0:`-${width}`,
        ...styles
    }


    const hasTransitioned = useTransition(open,300)

    const overlayClasses = !open?`${Nextstyles.overlay} ${Nextstyles.overlay_hidden}`:Nextstyles.overlay
    const drawerClasses = `${Nextstyles.drawer} ${Nextstyles[`${position}Animation`]}`
    return(
       <React.Fragment>
        {
            hasTransitioned
            &&
            <Portal wrapperId={container}>
                <div className={overlayClasses}>
                    <div
                        onClick={onClose}
                        style={{
                            position:'absolute',
                            height:'100%',
                            width:'100%',
                            zIndex:'-1'
                        }}
                    />
                    <div 
                        className={drawerClasses} 
                        style={drawerStyles}
                    >
                    {children}
                    </div>
                </div>
            </Portal>
        }
       </React.Fragment>
    )
}

export default Drawer;