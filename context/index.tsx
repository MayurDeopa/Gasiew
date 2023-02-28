import { Layout } from "@/components"
import {AuthProvider} from "./auth"
import {UserProvider} from "./user"


interface AppContextProps{
    children:JSX.Element | JSX.Element[]
}

const AppContext =({children}:AppContextProps)=>{
    return(
        <AuthProvider>
            <UserProvider>
                <Layout>
                    {children}
                </Layout>
            </UserProvider>
        </AuthProvider>
    )
}

export default AppContext;