import { Layout } from "@/components"
import ErrorBoundary from "@/components/shared/layout/ErrorBoundary"
import {AuthProvider} from "./auth"
import {UserProvider} from "./user"


interface AppContextProps{
    children:JSX.Element | JSX.Element[]
}

const AppContext =({children}:AppContextProps)=>{
    return(
        <ErrorBoundary>
            <AuthProvider>
                <UserProvider>
                    <Layout>
                        {children}
                    </Layout>
                </UserProvider>
            </AuthProvider>
        </ErrorBoundary>
    )
}

export default AppContext;