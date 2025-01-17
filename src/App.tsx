import React from 'react';
import {Link, NavLink, Outlet, useNavigate} from 'react-router-dom';
import styles from "./components/Site.module.css";
import {S} from './components/pages/_styles';

export const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    MODEL: '/:model/:id',
    PRICES: '/prices',
    PROTECTED: '/protected',
} as const;

function App() {
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate(-1)
    }

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <button onClick={navigateHandler} className={styles.ButtonLikeLink}>Back</button>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.ADIDAS}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PUMA}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.ABIBAS}>Abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PRICES}>Цены для оптовиков</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PROTECTED}>Protected Page</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>

                    <div className={styles.HorizontalNavigation}>
                        <Link className={styles.LinkLikeButton} to={PATH.ADIDAS}>Main page</Link>
                    </div>
                    <Outlet/>
                </div>

            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;

