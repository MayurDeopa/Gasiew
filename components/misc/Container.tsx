import React from 'react'

import NextStyles from '../../styles/misc.module.css'


interface ContainerProps extends React.ComponentPropsWithoutRef<'div'>{
    children?:JSX.Element[] | JSX.Element

}

const Container:React.FC<ContainerProps> =({children,...props})=>{

    return(
        <div
            {...props}
            className={NextStyles.container}
        >
            {children}
        </div>
    )
}

export default Container;