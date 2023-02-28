import { Form } from "@/components"
import { Button, Input } from "@/components/form";
import { Container } from "@/components/misc";
import Modal from "@/components/overlays/modal";
import { useAuthState } from "@/context/auth/AuthProvider";
import Image from "next/image";
import React, { useState } from "react";
import {MdTitle} from 'react-icons/md'
import LoginButton from "../auth/LoginButton";

const CreatePostForm = ()=>{
    const {isAuthorized} = useAuthState()
    const [title,setTitle] = useState('')
    const [file,setFile] = useState<string>('')
    const [hasUploaded,setUploaded] = useState(false)

    const hanldeChange = (e:any)=>{
        console.log(e.target.files[0])
        let url = URL.createObjectURL(e.target.files[0])
        setFile(url)
        setUploaded(true)
    }


    return(
        
            <Form.Form action={()=>console.log('')} styles={{width:'35rem'}}>
            {
                hasUploaded
                ?
                <Container style={{position:'relative',minHeight:'10rem'}} >
                    <Image src={file} fill alt=""/>
                </Container>
                :
                <Input
                    name="title"
                    placeholder="Title"
                    value={title}
                    forLabel={'title'}
                    prefix={<MdTitle/>}
                    type='file'
                    action={hanldeChange}
                />
            }
            <React.Fragment>
                {hasUploaded
                &&
                    <React.Fragment>
                        <Input
                            name="title"
                            placeholder="Title"
                            value={title}
                            forLabel={'title'}
                            prefix={<MdTitle/>}
                            type='text'
                            action={hanldeChange}
                        />
                        <Input
                            name="title"
                            placeholder="Title"
                            value={''}
                            forLabel={'title'}
                            prefix={<MdTitle/>}
                            type='text'
                            action={hanldeChange}
                        />
                        <Input
                            name="title"
                            placeholder="Title"
                            value={''}
                            forLabel={'title'}
                            prefix={<MdTitle/>}
                            type='text'
                            action={hanldeChange}
                            required
                        />
                        <Button.Primary type="submit" text="Upload"/>
                    </React.Fragment>
                }
                </React.Fragment>
            
        </Form.Form>
    )
}

export default CreatePostForm;