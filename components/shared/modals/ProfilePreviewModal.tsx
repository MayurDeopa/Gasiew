import React from "react"

import { Drawer } from "@/components/overlays"
import UserContainerSkeleton, { UserContainerSkeletonProps } from "@/components/skeletons/user/UserContainerSkeleton"


interface ProfilePreviewModalProps extends UserContainerSkeletonProps{
    open:boolean,
    onClose:()=>void,
}

const ProfilePreviewModal:React.FC<ProfilePreviewModalProps> = ({open,onClose,profileData,banner,})=>{


    return(
        <Drawer 
            open={open}
            onClose={onClose}
            position="bottom"
            height="90%"
            width="100%"
        >
            <UserContainerSkeleton profileData={profileData} banner={banner}/>
        </Drawer>
    )
}

export default ProfilePreviewModal;