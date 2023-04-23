import React,{useState} from 'react'

import { useAuthState } from '@/context/auth/AuthProvider'

import Dropdown, { DropDownOption } from '@/components/ui/DropDown'

import Skeleton from '@/components/feedback/skeleton/Skeleton'
import { Avatar } from '@/components/ui'

import NextStyles from '../../../styles/appbar.module.css'
import ClickAwayListener from '@/components/misc/clickaway'
import { Button } from '@/components/form'
import LogoutButton from '@/components/common/auth/LogoutButton'
import LoginButton from '@/components/common/auth/LoginButton'
import ChangeThemeButton from '@/components/common/preference/ChangeThemeButton'




const UserProfile:React.FC =()=>{

    const [show,setShow] = useState(false)
    const {isAuthorized,isLoading,user,error} = useAuthState()

    const {assets} = user

  if(isLoading){
    return <Skeleton width='2rem' height='2rem' borderRadius='50%'/>
  }
  
  if(isAuthorized){
    return(
        
            <div className={NextStyles.user_profile_wrapper} onClick={()=>setShow(!show)}>
                <ClickAwayListener onClickAway={()=>setShow(false)}>
                <input type='image' src={assets.avatar_url}  className={NextStyles.user_image}/>
                
                <Dropdown open={show}  style={{position:'absolute',right:'0px',top:'45px',width:'8rem'}}>
                    <DropDownOption>
                        <Button.DropwDownLink url={`/u/${user.username}`} text='Profile' styles={{width:'100%'}}/>
                    </DropDownOption>
                    <DropDownOption>
                        <Button.DropwDownLink url='/account' text='Settings' styles={{width:'100%'}}/>
                    </DropDownOption>
                    <DropDownOption>
                        <ChangeThemeButton/>
                    </DropDownOption>
                    <DropDownOption>
                        <LogoutButton/>
                    </DropDownOption>
                </Dropdown>
                </ClickAwayListener>
            </div>
    )
  }
  return <LoginButton/>

}

export default UserProfile