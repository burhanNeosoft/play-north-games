import Image from 'next/image'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.container}>
        <footer className={styles.footer}>        
          Powered by Play North          
      </footer>
    </div>
  )
}

export default Footer
