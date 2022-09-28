import React from "react";
import styles from '../../styles/Work.module.css';
import { FiGithub } from 'react-icons/fi';
import { BiLink } from 'react-icons/bi';
import { Work as _Work } from '../../typepings';
import { urlFor } from "../../sanity";
import internal from "stream";


type Props = {
    work: _Work;
    i: number;
};


export default function Card({ work, i } : Props){
    return (
        <li className={`${styles.work__detail} ${i%2==0 ? styles.left : styles.right}`} key={work?._id}>
            <div
                className={styles.project__content}
                data-aos="fade-left"
                data-aos-delay="100"
            >
                <p className='accent type'>{work?.category}</p>
                <h3 className={styles.project__title}>{work?.title}</h3>
                <div className={styles.project__desc}>
                    <p>{work?.description}</p>
                </div>
                <ul className={styles.techs}>

                    {work?.techs.map((t, k) => (
                        <li key={k}>{t}</li>
                    ))}

                </ul>
                <div className={styles.links}>
                    {work.github != undefined ? (
                        <a href={work.github}><FiGithub/></a>
                    ) : ("")}

                    {work.live != undefined ? (
                        <a href={work.live} className={styles.ext}><BiLink /></a>
                    ) : ("")}
                </div>
            </div>

            <div
                className={styles.project__img}
                data-aos="fade-right"
                data-aos-delay="110"
            >
                <a href="#header" target="_blank" className={styles.img__wrapper}>
                    <img alt='icon' className={styles.img} src={urlFor(work?.img).url()}/>
                </a>
            </div>
        </li>
    );
}