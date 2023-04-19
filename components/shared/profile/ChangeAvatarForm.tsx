import { useState ,ChangeEvent} from "react"

import { Button, Form } from "@/components/form"
import { Avatar } from "@/components/ui"
import { useUserFeatures } from "@/lib/hooks"
import { Container } from "@/components/misc"
import ProfilePreviewModal from "../modals/ProfilePreviewModal"


interface ChangAvatarFormProps{
    data:any
}


const ChangeAvatarForm:React.FC<ChangAvatarFormProps> = ({data})=>{


    const {assets,banner} = data
    const {updateUserAvatar,isLoading,err,asyncData} = useUserFeatures()
    const [openPreview,togglePreview] = useState(false)


    const [selectedImage,setSelectedImage] = useState<any>({
        image:null,
        url:''
    })

    const imageSource = selectedImage.image?selectedImage.url:assets.avatar_url

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {

          setSelectedImage({...selectedImage,image:e.target.files[0],url:URL.createObjectURL(e.target.files[0])});
        }
      };


    const handleSubmit = async()=>{
        await updateUserAvatar({
            oldImageId:assets.fileId,
            newImage:selectedImage.image
        })
    }
      

    return(
        <Form styles={{boxShadow:'none',justifyContent:'center'}} action={handleSubmit}>
            <Avatar src={imageSource}/>
            <input type='file' onChange={handleImageChange} required style={{width:'100%'}}/>
            <Container>
                <Button.Primary text="Upload" styles={{width:'7rem'}}  type="submit" loading={isLoading} disabled={!selectedImage.image}/>
                <Button.Secondary text="Preview" styles={{width:'7rem'}}  loading={isLoading} disabled={!selectedImage.image} action={()=>togglePreview(!openPreview)}/>
            </Container>
            {err && <p>{err}</p>}
            <ProfilePreviewModal 
                open={openPreview} 
                onClose={()=>togglePreview(false)} 
                profileData={{
                    image:{
                        url:imageSource
                    }
                }}
            />
        </Form>
    )
}

export default ChangeAvatarForm