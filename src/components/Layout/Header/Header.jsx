import Image from 'next/image'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.container}>
        <header>
            <h1>Play North</h1>
        </header>
    </div>
  )
}

export default Header
