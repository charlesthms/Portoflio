import React from "react";
import { urlFor } from '../../sanity';
import styles from '../../styles/Skills.module.css';
import { Skill } from '../../typepings';

type Props = {
    skills: Skill[];
};

export default function Skills({ skills } : Props) {
    return (
        <section id="skills" className={`container ${styles.skills__container}`}>
            <div className={styles.skills__heading} data-aos="fade-down">
                <h1 className="section__title"><span className='accent'>~</span>/comptétences</h1>
            </div>

            <ul className={styles.skills__grid}>

                { skills.map((skill, i) => (
                    <li key={skill?._id} data-aos="fade-down" data-aos-delay={i*50}>
                        <img src={urlFor(skill?.picture).url()} alt="react icon" className={styles.skill} />
                        <p>{skill?.name}</p>
                    </li>
                )) }

            </ul>
        </section>
    );
}