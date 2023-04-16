import React, { useState, useRef, useEffect, ReactNode, CSSProperties } from 'react';


import NextStyles from '../../../styles/post.module.css'
import { useScreenWidth, useTransition } from '@/lib/hooks';
import { Drawer } from '@/components/overlays';

interface DropDownItemsProp{
  title?:string
  component?:ReactNode
  children?: DropDownItemsProp[]
}


interface DropDownProps{
    open:boolean
    onClick?:()=>void
    style?:CSSProperties
    children:ReactNode
}

interface DropDownOptionProps{
  
  children:ReactNode

}



export const DropDownOption:React.FC<DropDownOptionProps>=({children})=>{



  return (
    <li className={NextStyles.option}>
      {children}
    </li>
  )
}

 const DropdownMenu:React.FC<DropDownProps>=({open,style,children})=> {
  

  const {isMobileScreen} = useScreenWidth()


  const hasTransitioned = useTransition(open,300)

  const wrapperClass = open?`${NextStyles.options_wrapper} ${NextStyles.options_slide_in}`:NextStyles.options_wrapper

  if(isMobileScreen){
    return(
      <Drawer open={open} position='bottom' width='100%' height='auto'>
            <ul className={NextStyles.options_container}>
              {children}
            </ul>
      </Drawer>
    )
  }

  return (
        <div style={{...style}} className={wrapperClass}>
          {hasTransitioned && (
            <ul className={NextStyles.options_container}>
              {children}
            </ul>
          )}
        </div>
  );
}

export default DropdownMenu;
