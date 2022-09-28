import React from "react";
import styles from '../../styles/Header.module.css';
import HeaderSocials from './HeaderSocials';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { HeaderInfos } from "../../typepings";
import { urlFor } from "../../sanity";

type Props = {
    headerInfos: HeaderInfos;
};

export default function Header({ headerInfos }: Props){

    const [text, count] = useTypewriter({
        words: [
          'Etudiant, Développeur & Passionné',
          'loop();'
        ],
        loop: true,
        delaySpeed: 2000,
    });    
    
    return (
        <header className={styles.header} id="header">
            <div className={`container ${styles.header__container}`}>
                <div className={styles.description}>
                <div className={styles.text}>
                    <h5 className={styles.accent} data-aos="fade-right" data-aos-duration="700">Bonjour, je suis</h5><br />
                    <h1 className={styles.name} data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Charles THOMAS.</h1><br />
                    <h1 className={styles.caption} data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                        {text}
                        <Cursor cursorColor="#9f55ff"/>
                    </h1><br />
                    <h5 className={styles.sub} data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        {headerInfos?.description}
                    </h5>
                </div>
                </div>

                <img
                    className={styles.profile}
                    src={urlFor(headerInfos?.profile_pic).url()}
                    alt="Profile picture"
                    data-aos="fade-left"
                    data-aos-duration="700"
                    data-aos-delay="300"
                />

                <div 
                    className={styles.header__btns}
                    data-aos="fade-down"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                >
                    <a className="btn btn__primary" href='#work'>Explorer</a>
                </div>
                
                <HeaderSocials />

            </div>
        </header>
    )
}