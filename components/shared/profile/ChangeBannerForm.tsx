import { useState ,ChangeEvent} from "react"

import { Button, Form } from "@/components/form"
import { Avatar } from "@/components/ui"
import { useUserFeatures } from "@/lib/hooks"

import { Container } from "@/components/misc"
import ProfilePreviewModal from "../modals/ProfilePreviewModal"


interface ChangeBannerFormProps{
    data:any
}


const ChangeBannerForm:React.FC<ChangeBannerFormProps> = ({data})=>{


    const {assets,banner} = data
    const {updateUserBanner,isLoading,err,asyncData} = useUserFeatures()
    const [openPreview,togglePreview] = useState(false)

    const [selectedImage,setSelectedImage] = useState<any>({
        image:null,
        url:''
    })

    const imageSource = selectedImage.image?selectedImage.url:banner.url

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {

          setSelectedImage({...selectedImage,image:e.target.files[0],url:URL.createObjectURL(e.target.files[0])});
        }
      };


    const handleSubmit = async()=>{
        await updateUserBanner({
            oldImageId:assets.fileId,
            newImage:selectedImage.image
        })
    }
      

    return(
        <Form styles={{boxShadow:'none',justifyContent:'center'}} action={handleSubmit}>
            <Avatar src={imageSource} radius="0" width="10rem"/>
            <input type='file' onChange={handleImageChange} required style={{width:'100%'}}/>
            <Container>
                <Button.Primary text="Upload" styles={{width:'7rem'}}  type="submit" loading={isLoading} disabled={!selectedImage.image}/>
                <Button.Secondary text="Preview" styles={{width:'7rem'}}   disabled={!selectedImage.image || isLoading} action={()=>togglePreview(!openPreview)}/>
            </Container>
            {err && <p>{err}</p>}
            <ProfilePreviewModal 
                open={openPreview} 
                onClose={()=>togglePreview(false)} 
                banner={{
                    url:imageSource
                }}
            />
            {err && <p>{err}</p>}
        </Form>
    )
}

export default ChangeBannerForm