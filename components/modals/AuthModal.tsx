import Modal from "../overlays/modal"
import { Tab } from "../misc"
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
       />
        </Modal>
    )
}

export default AuthModal;