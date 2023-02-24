import React from "react";



import AppBar from "./Appbar";
import GlobalModalsProvider from "../shared/modals";

import styles from '../../styles/layout.module.css'

interface LayoutProps{
    children:JSX.Element | JSX.Element[]
    withAppBar?:boolean
}

const Layout:React.FC<LayoutProps> =(props)=>{

    const{
        withAppBar = true,
        children
    } = props

    return(
        <div className={styles.content_wrapper}>
            <GlobalModalsProvider>
                <AppBar/>
                <div className={styles.content_container}>
                    {children}
                </div>
            </GlobalModalsProvider>
        </div>
    )
}

export default Layout;