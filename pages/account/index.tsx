import Stack from "@/components/misc/stack"
import { useRouter } from "next/router"


const Account = ()=>{

    const router = useRouter()
    const {tab} = router.query
    console.log(router.asPath)

    return <Stack items={[
        {
            label:'Profile',
            key:0,
            url:'/account/edit'
        },
        {
            label:'Security',
            key:1,
            url:'account/security'
        }
    ]} withLink link="/account" />
}

export default Account