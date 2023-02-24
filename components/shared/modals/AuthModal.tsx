import Modal from "@/components/overlays/modal/Modal"
import { Tab } from "@/components/misc"

import React from "react"

type AuthModalProps={
    open:boolean,
    onClose:()=>void
}

const AuthModal:React.FC<AuthModalProps> = ({open,onClose})=>{


    return(
        <Modal 
            open={open}
            onClose={onClose}
        >
            <Tab
              defaultActiveKey={0}
              items={[
                {
                  'label':'Login',
                  'key':1,
                  "content":<p>Login</p>
                },
                {
                  'label':'SignUp',
                  'key':2,
                  "content":<p>Signup</p>
                }
              ]}
              style={{
                width:'30rem',
                maxWidth:'100%',
                height:'40rem'
              }}
            />
        </Modal>
    )
}

export default AuthModal;