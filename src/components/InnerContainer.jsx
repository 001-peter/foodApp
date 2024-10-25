import styles from './Innercontainer.module.css'
export default function InnerContainer({children}){
    return <div className={styles.InnerContainer}>{children}</div>
}