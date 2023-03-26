
import { useGlobalModals } from '../shared/modals';
import { Form } from '..';
import styles from '../../styles/appbar.module.css'
import LoginButton from '../common/auth/LoginButton';
import { useAuthState } from '@/context/auth/AuthProvider';
import { Button } from '../form';



const AppBar =()=>{

    const {isAuthorized} = useAuthState()
    const {setShowCreateModal,showCreateModal} = useGlobalModals()

    return(
        <div className={styles.wrapper}>
            <nav className={styles.container}>
                {isAuthorized?<Button.Primary text='Create' action={()=>setShowCreateModal(!showCreateModal)} styles={{width:'5rem'}}/>:<LoginButton />}
            </nav>
        </div>
    )
}

export default AppBar;