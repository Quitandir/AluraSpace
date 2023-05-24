import { Fragment } from "react";
import styles from './paginaInicial.module.scss';

import Cabecalho from "componentes/Cabecalho";
import Menu from "componentes/Menu";
import Banner from "componentes/Banner/Banner";
import Rodape from "componentes/Rodape";
import Galeria from "componentes/Galeria";
import Populares from "componentes/Populares";

export default function PaginaInicial () {
    return (
        <Fragment>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
                <div className={styles.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>
            <Rodape />
        </Fragment>
    )
}