import React,{ CSSProperties ,useState} from "react"

import { Container } from "@/components/misc"

import NextStyles from '../../../styles/tab.module.css'
import Link from "next/link"

export interface TabLabelProps extends React.ComponentPropsWithoutRef<'button'>{
    children:JSX.Element | string
    active:boolean
    disabled?:boolean
    onClick:()=>void

}

export interface TabLabelWithLinkProps extends React.ComponentPropsWithoutRef<'button'>{
    children:JSX.Element | string
    active:boolean
    disabled?:boolean
    activeKey:number
    query:string

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
    withLink?:boolean
    linkQuery?:string
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


const TabLabelWithLink:React.FC<TabLabelWithLinkProps> =({
    children,
    active,
    disabled = false,
    activeKey,
    query,
    ...props
})=>{

    const activeClass = active?`${NextStyles.label} ${NextStyles.active}`:NextStyles.label
    return(
            <Link href={{pathname:'/',query:{[query]:activeKey}}}>
                <button
                    disabled={disabled}
                    className={activeClass}
                    {...props}
                >
                    {children}
                </button>
            </Link>
    )
}



const Tab:React.FC<TabProps> =({
    defaultActiveKey = 0,
    items,
    withLink = false,
    linkQuery='tab',
    ...props
})=>{

    if(!defaultActiveKey)defaultActiveKey = 0

    const [activeTab,setActiveTab] = useState<number >(defaultActiveKey )

    const getActiveTab =(a:number)=>{
        if(Number.isNaN(a) || a>items.length - 1 || a<=0 ) return items[0].content
        return items[a].content
    }


    const isActive =(a:number)=>a ==activeTab
    
    const handleClick =(a:number)=>setActiveTab(a)

    const isActiveLink = (a:number)=>a==defaultActiveKey

    if(withLink){
        return(
            <div
                className={NextStyles.wrapper}
                {...props}
            >
                <Container
                    className={NextStyles.header}        
                >
                    
                {
                    items?.map((i,index)=>{
                        return (
                            <TabLabelWithLink
                                activeKey={i.key}
                                active={isActiveLink(i.key)}
                                disabled={i.disabled}
                                key={index}
                                query={linkQuery}
                            >
                             {i.label}   
                            </TabLabelWithLink>
                        )
                    })
                    
                }
                    
                </Container>
                <Container
                    style={{
                        justifyContent:'center',
                        alignItems:'center',
                        marginTop:'10px'
                    }}
                >
                    
                    {getActiveTab(defaultActiveKey)}
                </Container>
            </div>
        )
    }

    return(
        <div
            className={NextStyles.wrapper}
            {...props}
        >
            <Container
                className={NextStyles.header}        
            >
                
            {
                items?.map((i,index)=>{
                    return (
                        <TabLabel
                            onClick={()=>handleClick(i.key)}
                            active={isActive(i.key)}
                            disabled={i.disabled}
                            key={index}
                        >
                         {i.label}   
                        </TabLabel>
                    )
                })
            }
                
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