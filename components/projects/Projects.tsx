import React from "react";
import styles from "../../styles/Projects.module.css";
import { Project } from '../../typepings';
import Card from "./Card";

type Pros = {
    projects: Project[];
};

export default function ProjectsC({ projects } : Pros){
    return (
        <section className='container'>
            <div className={styles.main__title}>
                <h2 className={styles.h2}>Mes autres projets</h2>
            </div>
            <ul className={styles.projects__grid}>
                {projects.map(proj => (
                    <li
                        className={styles.project__item}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        key={proj?._id}
                    >
                        <Card project={proj}/>
                    </li>
                ))}
            </ul>
        </section>
    );
}