import React,{ CSSProperties ,ReactNode,useState} from "react"

import { Container } from "@/components/misc"

import NextStyles from '../../../styles/stack.module.css'
import Link from "next/link"
import { useRouter } from "next/router"

export interface StackLabelProps extends React.ComponentPropsWithoutRef<'button'>{
    children:JSX.Element | string
    active:boolean
    disabled?:boolean
    onClick:()=>void

}

export interface StackLabelWithLinkProps extends React.ComponentPropsWithoutRef<'button'>{
    children:JSX.Element | string
    active:boolean
    disabled?:boolean
    activeKey:number
    query:string
    link:string

}

export type StackItem={
    label:string,
    key:number ,
    url?:string,
    disabled?:boolean

}

export interface StackProps{
    defaultActiveKey?:number
    items:StackItem[]
    withLink?:boolean
    linkQuery?:string
    styles?:{}
    link?:string
    children?:ReactNode
}

export interface StackContentProps{
    element:JSX.Element
}


const StackLabel:React.FC<StackLabelProps> =({
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


const StackLabelWithLink:React.FC<StackLabelWithLinkProps> =({
    children,
    active,
    disabled = false,
    activeKey,
    query,
    link='/',
    ...props
})=>{


    const queryData = query?{[query]:activeKey} : {}

    const activeClass = active?`${NextStyles.label} ${NextStyles.active}`:NextStyles.label
    return(
            <Link href={{pathname:link,query:queryData}} style={{width:'100%'}}>
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



const StackContent:React.FC<StackContentProps> = ({element})=>{
    return element
}

const Stack:React.FC<StackProps> =({
    defaultActiveKey = 0,
    items,
    withLink = false,
    linkQuery,
    link='/',
    children,
    styles
})=>{

    if(!defaultActiveKey)defaultActiveKey = 0

    const router= useRouter()

    const [activeStack,setActiveStack] = useState<number >(defaultActiveKey )



    const isActive =(a:number)=>a ==activeStack
    
    const handleClick =(a:number)=>setActiveStack(a)

    const isActiveLink = (a:string)=>router.pathname == a

    if(withLink){
        return(
            <div
                className={NextStyles.wrapper}
                style={styles}
            >
                <div
                    className={NextStyles.header_wrapper}       
                >
                    
                {
                    items?.map((i,index)=>{
                        return (
                            <StackLabelWithLink
                                activeKey={i.key}
                                active={isActiveLink(i.url!)}
                                disabled={i.disabled}
                                key={index}
                                query={linkQuery!}
                                link={i.url!}
                            >
                             {i.label}   
                            </StackLabelWithLink>
                        )
                    })
                    
                }
                    
                </div>
                <div className={NextStyles.content}>
                    
                    {children}
                </div >
            </div>
        )
    }

    return(
        <div
            className={NextStyles.wrapper}
            style={styles}
        >
            <div
                className={NextStyles.header_wrapper}
            >
                
            {
                items?.map((i,index)=>{
                    return (
                        <StackLabel
                            onClick={()=>handleClick(i.key)}
                            active={isActive(i.key)}
                            disabled={i.disabled}
                            key={index}
                        >
                         {i.label}   
                        </StackLabel>
                    )
                })
            }
                
            </div>
            <Container
                
                >
                {children}
                
            </Container>
        </div>
    )
}

export default Stack;