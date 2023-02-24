
import { useGlobalModals } from '../shared/modals';
import { Form } from '..';
import styles from '../../styles/appbar.module.css'



const AppBar =()=>{

    const modals = useGlobalModals()

    return(
        <div className={styles.wrapper}>
            <nav className={styles.container}>
                <Form.Button.Primary action={()=>modals.setShowAuthModal(true)} text={"Login"}/>
            </nav>
        </div>
    )
}

export default AppBar;