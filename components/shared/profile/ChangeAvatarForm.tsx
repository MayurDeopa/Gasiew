import { useState ,ChangeEvent} from "react"

import { Button, Form } from "@/components/form"
import { Avatar } from "@/components/ui"
import { useUserFeatures } from "@/lib/hooks"


interface ChangAvatarFormProps{
    data:any
}


const ChangeAvatarForm:React.FC<ChangAvatarFormProps> = ({data})=>{


    const {assets,banner} = data
    const {updateUserAvatar,isLoading,err,asyncData} = useUserFeatures()


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
            oldImage:{
                id:assets.fileId
            },
            newImage:{
                file:selectedImage.image
            }
        })
    }
      

    return(
        <Form styles={{boxShadow:'none',justifyContent:'center'}} action={handleSubmit}>
            <Avatar src={imageSource}/>
            <input type='file' onChange={handleImageChange} required/>
            <Button.Primary text="Save" styles={{width:'7rem'}}  type="submit" loading={isLoading} disabled={!selectedImage.image}/>
            {err && <p>{err}</p>}
        </Form>
    )
}

export default ChangeAvatarForm