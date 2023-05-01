import React,{ CSSProperties ,useRef,useState} from "react"

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

export interface TabProps{
    defaultActiveKey?:number
    items:TabItem[]
    withLink?:boolean
    linkQuery?:string
    styles?:{}
}

export interface TabContentProps{
    element:JSX.Element
}


const TabLabel:React.FC<TabLabelProps> =({
    children,
    active,
    onClick,
    disabled = false,
    ...props
})=>{


    const labelRef = useRef(null)

    const activeClass = active?`${NextStyles.label} ${NextStyles.active}`:NextStyles.label

    const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(labelRef.current);
    }

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



const TabContent:React.FC<TabContentProps> = ({element})=>{
    return element
}

const Tab:React.FC<TabProps> =({
    defaultActiveKey = 0,
    items,
    withLink = false,
    linkQuery='tab',
    styles
})=>{

    if(!defaultActiveKey)defaultActiveKey = 0

    const [activeTab,setActiveTab] = useState<number >(defaultActiveKey )



    const isActive =(a:number)=>a ==activeTab
    
    const handleClick =(a:number)=>setActiveTab(a)

    const isActiveLink = (a:number)=>a==defaultActiveKey

    if(withLink){
        return(
            <div
                className={NextStyles.wrapper}
                style={styles}
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
                    
                    {items.map((i,index)=>{
                    if(i.key==defaultActiveKey){
                        return <TabContent key={index} element={i.content}/>
                    }
                    return(
                        <React.Fragment key={index}/>
                    )
                })}
                </Container>
            </div>
        )
    }

    return(
        <div
            className={NextStyles.wrapper}
            style={styles}
        >
            <Container
                style={{
                    position:'relative'
                }}
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
                    marginTop:'10px',
                }}
            >
                
                {items.map((i,index)=>{
                    if(i.key==activeTab){
                        return <TabContent key={index} element={i.content}/>
                    }
                    return(
                        <React.Fragment key={index}/>
                    )
                })}
            </Container>
        </div>
    )
}

export default Tab;