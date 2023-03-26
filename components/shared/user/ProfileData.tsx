import { ReactNode } from "react"

import NextStyles from '../../../styles/profile.module.css'

export interface ProfileDataProps{
  image?:ReactNode
  info?:ReactNode
  action?:ReactNode
}

const ProfileDate:React.FC<ProfileDataProps> =({image,info,action})=>{
    return(
        <div className={NextStyles.profile_card}>
            {image}
            {info}
        </div>
    )
}

export default ProfileDate