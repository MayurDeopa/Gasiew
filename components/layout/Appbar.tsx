
import { useGlobalModals } from '../shared/modals';
import { Form } from '..';
import styles from '../../styles/appbar.module.css'
import LoginButton from '../common/auth/LoginButton';
import { useAuthState } from '@/context/auth/AuthProvider';
import { Button } from '../form';
import { ReactNode } from 'react';


export interface AppBarProps{
    action?:ReactNode
    links?:ReactNode
    user?:ReactNode
}


const AppBar:React.FC<AppBarProps> =({action,links,user})=>{

    const {isAuthorized} = useAuthState()
    const {setShowCreateModal,showCreateModal} = useGlobalModals()

    return(
        <div className={styles.wrapper}>
            <nav className={styles.container}>
                <section className={styles.section}>
                    {isAuthorized?<Button.Primary text='Create' action={()=>setShowCreateModal(!showCreateModal)} styles={{width:'5rem'}}/>:<LoginButton />}
                </section>
                <section className={styles.section}>
                    {links}
                </section>
                <section className={styles.section}>
                    {user}
                </section>
            </nav>
        </div>
    )
}

export default AppBar;