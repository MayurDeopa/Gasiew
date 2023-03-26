import Modal from "@/components/overlays/modal/Modal"
import { Tab } from "@/components/misc"

import React from "react"
import { Login, Register } from "../auth"

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
                  'key':0,
                  "content":<Login/>
                },
                {
                  'label':'Register',
                  'key':1,
                  "content":<Register/>
                }
              ]}
              styles={{
                width:'35rem',
                maxWidth:'100%',
                height:'auto'
              }}
            />
        </Modal>
    )
}

export default AuthModal;