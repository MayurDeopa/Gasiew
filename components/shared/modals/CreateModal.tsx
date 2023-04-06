import { Form } from "@/components"
import { Button, Input } from "@/components/form";
import { Container } from "@/components/misc";
import Modal from "@/components/overlays/modal";
import { useAuthState } from "@/context/auth/AuthProvider";
import { uploadPost } from "@/context/user/actions";
import { useUserActions, useUserState } from "@/context/user/UserProvider";
import { uploadImage } from "@/lib/imagekit";
import Image from "next/image";
import React, { useState } from "react";
import {MdTitle} from 'react-icons/md'


export interface CreateModalProps{
    open:boolean
    onClose:()=>void
}

const CreateModal:React.FC<CreateModalProps> = (props)=>{

    const {
        open,
        onClose
    } = props

    const {token} = useAuthState()
    const {dispatch} = useUserActions()
    const {isLoading} = useUserState()
    const [title,setTitle] = useState('')
    const [caption,setCaption] = useState('')
    const [file,setFile] = useState()
    const [fileUrl,setFileUrl] = useState<string>('')
    const [hasUploaded,setUploaded] = useState(false)

    const hanldeChange = (e:any)=>{
        setFile(e.target.files[0])
        console.log(e.target.files[0])
        console.log(URL.createObjectURL(e.target.files[0]))
        let url = URL.createObjectURL(e.target.files[0])
        setFileUrl(url)
        setUploaded(true)
    }

    const uploadImageToBucket = async()=>{
        await uploadPost(dispatch,{
            file:{
                file:file,
                fileName:'gas'
            },
            token:token,
            post:{
                title:title,
                caption:caption
            }
        })
    }

    return(
        <Modal open={open} onClose={onClose}>
            <Form.Form action={uploadImageToBucket} styles={{width:'35rem'}}>
            {
                hasUploaded
                ?
                <Container style={{position:'relative',minHeight:'10rem'}} >
                    <Image src={fileUrl} height={160} width={200}  alt=""/>
                </Container>
                :
                <Input
                    name="Image"
                    placeholder="Image"
                    value={''}
                    forLabel={'image'}
                    type='file'
                    action={hanldeChange}
                    required
                />
                }
                <Input
                    name="title"
                    placeholder="Title"
                    value={title}
                    forLabel={'title'}
                    type='text'
                    action={(e)=>setTitle((e.target as HTMLInputElement).value)}
                    maxWidth='100%'
                    required
                />
                <Input
                    name="caption"
                    placeholder="Something..."
                    value={caption}
                    forLabel={'caption'}
                    type='textarea'
                    action={(e)=>setCaption((e.target as HTMLInputElement).value)}
                    required
                />
                            
                <Button.Primary type="submit" text="Upload" loading={isLoading}/>
            </Form.Form>
        </Modal>
    )
}

export default CreateModal;