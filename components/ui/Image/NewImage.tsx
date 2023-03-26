import clsx from "clsx";
import Image,{ImageProps} from "next/image";
import {  CSSProperties, useState } from "react";


import styles from '../../../styles/image.module.css'



export interface NewImageProps {
    imageProps:ImageProps
    containerProps?:{
        style?:CSSProperties,
        className?:{}
    }
    height?:number
    width?:number
}

const NewImage:React.FC<NewImageProps> =(props)=>{

    const {
        imageProps,
        containerProps,
        height,
        width
    } = props

    const [loading,setLoading] = useState(true)

    const getAspectRatio =(height:any,width:any)=>{
        let ratio = width/height
        return `${(1/ratio)*100}%`
    }

    const containerClass = loading?`${styles.image_wrapper} ${styles.skeleton_wrapper}`:styles.image_wrapper

    const imageClassName = loading?`${styles.image} ${styles.image_hidden}`:styles.image

    let customContainerStyles = ()=>{
        if(imageProps.fill){
            return getAspectRatio(height,width)
        }
        return
    }
    



    return(
        <div className={clsx(containerClass,containerProps?.className)} style={{...containerProps?.style}}>
            <Image  onLoadingComplete={()=>setLoading(false)} className={imageClassName} {...imageProps}/>
        </div>
    )
}


export default NewImage;