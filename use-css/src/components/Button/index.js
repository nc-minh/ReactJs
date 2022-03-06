import styles from './Button.module.scss'
import clsx from 'clsx'

function Button({primary, disabled}){
    const className = clsx(styles.btn, {
        [styles.primary]: primary,
        [styles.disabled]: disabled
    })
    return(
        <button className={className}>Button</button>
    )
}

export default Button