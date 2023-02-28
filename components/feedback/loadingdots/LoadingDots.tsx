

import NextStyles from '../../../styles/spinner.module.css'

const LoadingDots =({color = 'primary'}:{color?:string})=>{

    const customClasses  = color!='primary'?NextStyles.primary:NextStyles.secondary

    return(
        <div className={`${NextStyles.wrapper} ${customClasses}`}>
            <span/>
            <span/>
            <span/>
        </div>
    )
}

export default LoadingDots;