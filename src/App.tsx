import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import styles from "./components/Site.module.css";
import {S} from './components/pages/_styles';

export const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    MODEL: '/:model/:id',
    PRICES: '/prices'
} as const;

function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.ADIDAS}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PUMA}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.ABIBAS}>Abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PRICES}>Цены для оптовиков</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <Outlet/>
                </div>

            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;

