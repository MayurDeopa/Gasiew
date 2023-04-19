import { ReactNode,CSSProperties } from "react"

import NextStyles from '../../../styles/profile.module.css'

export interface ProfileDataProps{
  image?:ReactNode
  info?:ReactNode
  action?:ReactNode
  style?:CSSProperties
}

const ProfileData:React.FC<ProfileDataProps> =({image,info,style})=>{
    return(
        <div className={NextStyles.profile_card} style={{...style}}>
            {image}
            {info}
        </div>
    )
}

export default ProfileData