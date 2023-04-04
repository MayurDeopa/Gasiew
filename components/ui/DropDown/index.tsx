import React, { useState, useRef, useEffect, ReactNode, CSSProperties } from 'react';

import { Modal } from '@/components/overlays';

import NextStyles from '../../../styles/post.module.css'
import { useTransition } from '@/lib/hooks';

interface DropDownItemsProp{
  title?:string
  component?:ReactNode
  children?: DropDownItemsProp[]
}


interface DropDownProps{
    open:boolean
    onClick?:()=>void
    items:DropDownItemsProp[]
    style?:CSSProperties
}

interface DropDownOptionProps extends React.HtmlHTMLAttributes<"div"> {
  item:DropDownItemsProp
  onClose?:()=>void
  showBack?:boolean

}

export const DropDownOption:React.FC<DropDownOptionProps>=({item,onClose,showBack=false})=>{



  return (
    <li className={NextStyles.option}>
      {item.title}
    </li>
  )
}

 const DropdownMenu:React.FC<DropDownProps>=({open,onClick,items,style})=> {
  

  const hasTransitioned = useTransition(open,300)

  const wrapperClass = open?`${NextStyles.options_wrapper} ${NextStyles.options_slide_in}`:NextStyles.options_wrapper

  return (
        <div style={{...style}} className={wrapperClass}>
          {hasTransitioned && (
            <ul className={NextStyles.options_container}>
              {items.map((i,index)=>{
                return <DropDownOption item={i} key={index}/>
              })}
            </ul>
          )}
        </div>
  );
}

export default DropdownMenu;
