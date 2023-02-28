
import { useGlobalModals } from '../shared/modals';
import { Form } from '..';
import styles from '../../styles/appbar.module.css'
import LoginButton from '../common/auth/LoginButton';



const AppBar =()=>{



    return(
        <div className={styles.wrapper}>
            <nav className={styles.container}>
                <LoginButton />
            </nav>
        </div>
    )
}

export default AppBar;