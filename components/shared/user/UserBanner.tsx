import Skeleton from '@/components/feedback/skeleton/Skeleton'
import React,{ReactNode} from 'react'

export interface UserBannerProps{
    banner?:ReactNode
}

const UserBanner:React.FC<UserBannerProps> = ({banner})=>{
    return(
        <React.Fragment>
            {banner || <Skeleton height='17rem' width='100%'/>}
        </React.Fragment>
    )
}

export default UserBanner