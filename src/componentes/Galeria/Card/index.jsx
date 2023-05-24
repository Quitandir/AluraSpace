import favorito from './favorito.png'
import abrir from './open.png'  

export default function Card({item, styles}) {
    return (
        <li key={item.id} className={styles.galeria__card}>
        <img
            className={styles.galeria__imagem}
            src={item.imagem}
            alt={item.titulo}
        />
        <p className={styles.galeria__descricao}>{item.titulo}</p>
        <div>
            <p>{item.creditos}</p>
            <span>
                <img src={favorito} alt='Ícone coração para curtir' />
                <img src={abrir} alt='Ícone de abrir modal' />
            </span>
        </div>
    </li>
    )
}