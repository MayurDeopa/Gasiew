import {ReactNode} from 'react'


import Stack from "@/components/misc/stack"
import { withAuth } from '@/components/HOC'


import NextStyles from '../../../styles/account.module.css'

interface AccountWrapper{
    children?:ReactNode
}

const AccountWrapper:React.FC<AccountWrapper> = ({children})=>{


    return (
        <div className={NextStyles.wrapper}>
            <Stack items={[
                {
                    label:'Profile',
                    key:0,
                    url:'/account/edit'
                },
                {
                    label:'Security',
                    key:1,
                    url:'/account/security'
                }
            ]} withLink link="/account">
                {children}
            </Stack>
        </div>
    )
}

export default withAuth(AccountWrapper)