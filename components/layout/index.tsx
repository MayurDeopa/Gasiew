import React from "react";



import AppBar from "./Appbar";
import GlobalModalsProvider from "../shared/modals";

import styles from '../../styles/layout.module.css'
import Skeleton from "../feedback/skeleton/Skeleton";
import { Button } from "../form";
import { UserProfileIcon } from "../shared/appbar";

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
                <AppBar 
                    user={<UserProfileIcon/>} 
                    links={
                        <React.Fragment>
                            <Button.LinkBtn text="Explore" url="/?gas=0"/>
                            <Button.LinkBtn text="Search" url="/?gas=1"/>
                        </React.Fragment>
                    }
                />
                <div className={styles.content_container}>
                    {children}
                </div>
            </GlobalModalsProvider>
        </div>
    )
}

export default Layout;