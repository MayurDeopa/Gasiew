import React,{ CSSProperties ,useState} from "react"

import { Container } from "@/components/misc"

import NextStyles from '../../../styles/tab.module.css'

export interface TabLabelProps extends React.ComponentPropsWithoutRef<'button'>{
    children:JSX.Element | string
    active:boolean
    disabled?:boolean
    onClick:()=>void

}


export type TabItem={
    label:string,
    key:number ,
    content:JSX.Element,
    disabled?:boolean

}

export interface TabProps extends React.ComponentPropsWithoutRef<'div'>{
    defaultActiveKey?:number
    items:TabItem[]
}



const TabLabel:React.FC<TabLabelProps> =({
    children,
    active,
    onClick,
    disabled = false,
    ...props
})=>{

    const activeClass = active?`${NextStyles.label} ${NextStyles.active}`:NextStyles.label

    return(
            <button
                disabled={disabled}
                className={activeClass}
                onClick={onClick}
                {...props}
            >
                {children}
            </button>
    )
}



const Tab:React.FC<TabProps> =({
    defaultActiveKey = 0,
    items,
    ...props
})=>{



    const [activeTab,setActiveTab] = useState<number >(defaultActiveKey)

    const getActiveTab =(a:number)=>{
        if(a>items.length - 1 || a<0) return items[0].content
        return items[a].content
    }


    const isActive =(a:number)=>a-1 ==activeTab
    
    const handleClick =(a:number)=>setActiveTab(a)

    return(
        <div
            className={NextStyles.wrapper}
            {...props}
        >
            <Container
                className={NextStyles.header}        
            >
                
            {items?.map((i,index)=>{
                    return (
                        <TabLabel
                            onClick={()=>handleClick(i.key - 1)}
                            active={isActive(i.key)}
                            disabled={i.disabled}
                            key={index}
                        >
                         {i.label}   
                        </TabLabel>
                    )
                })}
                
            </Container>
            <Container
                style={{
                    justifyContent:'center',
                    alignItems:'center',
                    marginTop:'10px'
                }}
            >
                
                {getActiveTab(activeTab)}
            </Container>
        </div>
    )
}

export default Tab;