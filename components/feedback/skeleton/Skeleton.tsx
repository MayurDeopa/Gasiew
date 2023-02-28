
import React from 'react';
import styles from '../../../styles/feedback.module.css'


interface SkeletonProps{
    height?:string,
    width?:string
}

const Skeleton:React.FC<SkeletonProps> = ({height='2rem',width='10rem'})=>{
    return(
        <div className={styles.skeleton} style={{height:height,width:width}}>

        </div>
    )
}

export default Skeleton;