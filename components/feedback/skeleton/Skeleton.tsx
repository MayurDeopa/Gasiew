
import React, { useEffect } from 'react';
import styles from '../../../styles/feedback.module.css'


interface SkeletonProps{
    height?:string
    width?:string
    borderRadius?:string
}

const Skeleton:React.FC<SkeletonProps> = ({height='2rem',width='10rem',borderRadius})=>{

    return(
        <div className={styles.skeleton} style={{height:height,width:width,borderRadius}}>
            
        </div>
    )
}

export default Skeleton;