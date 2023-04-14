import React,{useState} from 'react'

import { useAuthState } from '@/context/auth/AuthProvider'

import Dropdown from '@/components/ui/DropDown'

import Skeleton from '@/components/feedback/skeleton/Skeleton'
import { Avatar } from '@/components/ui'

import NextStyles from '../../../styles/appbar.module.css'


const userOptions = [
    {
        title:'Profile'
    },
    {
        title:'Settings'
    },
    {
        title:'Log out'
    }
]


const UserProfile:React.FC =()=>{

    const [show,setShow] = useState(false)
    const {isAuthorized,isLoading,user} = useAuthState()

    const {assets} = user

  if(isLoading){
    return <Skeleton width='4rem'/>
  }
  
  if(isAuthorized){
    return(
        <div className={NextStyles.user_profile_wrapper} onClick={()=>setShow(!show)}>
            <Avatar src={assets.avatar_url} height='2rem' width='2rem'/>
            <Dropdown open={show}  items={userOptions} style={{position:'absolute',right:'10px',top:'30px',width:'5rem'}}/>
        </div>
    )
  }
  return <React.Fragment/>

}

export default UserProfile