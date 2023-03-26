import Skeleton from "@/components/feedback/skeleton/Skeleton";
import { Tab } from "@/components/misc";
import PostList from "@/components/shared/post/PostList";
import { useAuthState } from "@/context/auth/AuthProvider";
import { useRouter } from "next/router";
import { useState } from "react";



export default function Home() {


  const router = useRouter()
  const {gas} = router.query


  return (

    

   <div>
    <Tab
      defaultActiveKey={parseInt(gas)}
      withLink
      linkQuery="gas"
      items={[
        {
          label:'All',
          key:0,
          content:<PostList />
        },
        {
          label:'Trending',
          key:1,
          content:<PostList />
        },
        {
          label:'Hot',
          key:2,
          content:<PostList/>
        }
      ]}
    />
      
   </div>
  )
}
