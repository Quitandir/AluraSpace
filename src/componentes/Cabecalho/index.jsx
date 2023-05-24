import logo from './logo.png'
import search from './search.png'
import styles from './Cabecalho.module.scss'

export default function Cabecalho(){
   return(
      <header className= {styles.cabecalho}>
         <img src= {logo} alt="logo do Alura space" />
         <div className={styles.cabecalho__container}>
            <input className={styles.cabecalho__input} type="text" placeholder="o que você procura"/>
            <img src={search} alt="icone de lupa" />
         </div>
      </header>
   )
}