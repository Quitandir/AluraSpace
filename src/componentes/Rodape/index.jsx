import styles from './Rodape.module.scss'
import logoFB from '../../assets/facebook.svg'
import logoTW from '../../assets/twitter.svg'
import logoIG from '../../assets/instagram.svg'

export default function Rodape() {
    return (
        <footer className={styles.Rodape}>
            <div className={styles.logos}>
                <a href='http://facebook.com'><img src={logoFB} alt='Logo do Facebook'/></a>
                <a href='http://twitter.com'><img src={logoTW} alt='Logo do Facebook'/></a>
                <a href='http://instagram.com'><img src={logoIG} alt='Logo do Facebook'/></a>
            </div>
            <p className={styles.texto}>Desenvolvido por Alura.</p>

        </footer>
    )
}

