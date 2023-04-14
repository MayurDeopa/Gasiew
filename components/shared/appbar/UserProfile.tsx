import React,{useState} from 'react'

import { useAuthState } from '@/context/auth/AuthProvider'

import Dropdown, { DropDownOption } from '@/components/ui/DropDown'

import Skeleton from '@/components/feedback/skeleton/Skeleton'
import { Avatar } from '@/components/ui'

import NextStyles from '../../../styles/appbar.module.css'
import ClickAwayListener from '@/components/misc/clickaway'
import { Button } from '@/components/form'
import LogoutButton from '@/components/common/auth/LogoutButton'


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
    const {isAuthorized,isLoading,user,error} = useAuthState()

    const {assets} = user

  if(isLoading){
    return <Skeleton width='2rem' height='2rem' borderRadius='50%'/>
  }
  
  if(isAuthorized){
    return(
        <ClickAwayListener onClickAway={()=>setShow(false)}>
            <div className={NextStyles.user_profile_wrapper} onClick={()=>setShow(!show)}>
                <input type='image' src={assets.avatar_url}  className={NextStyles.user_image}/>
                <Dropdown open={show}  style={{position:'absolute',right:'0px',top:'45px',width:'8rem'}}>
                    <DropDownOption>
                        <Button.DropwDownLink url={`/u/${user.username}`} text='Profile' styles={{width:'100%'}}/>
                    </DropDownOption>
                    <DropDownOption>
                        <Button.DropwDownLink url='/account' text='Settings' styles={{width:'100%'}}/>
                    </DropDownOption>
                    <DropDownOption>
                        <LogoutButton/>
                    </DropDownOption>
                </Dropdown>
            </div>
        </ClickAwayListener>
    )
  }
  return <React.Fragment/>

}

export default UserProfile