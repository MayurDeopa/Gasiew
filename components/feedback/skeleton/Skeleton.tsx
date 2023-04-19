
import React, { CSSProperties } from 'react';
import styles from '../../../styles/feedback.module.css'


interface SkeletonProps{
    height?:string
    width?:string
    borderRadius?:string
    animation?:boolean
    style?:CSSProperties
}

const Skeleton:React.FC<SkeletonProps> = ({height='2rem',width='10rem',borderRadius,animation=true,style})=>{

    return(
        <div className={styles.skeleton} style={{height:height,width:width,borderRadius,...style}}>
            
        </div>
    )
}

export default Skeleton;