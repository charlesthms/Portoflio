import React from "react";
import styles from "../../styles/Projects.module.css";
import { Project } from "../../typepings";
import { FiGithub } from 'react-icons/fi';
import { BiLink } from 'react-icons/bi';


type Props = {
    project: Project;
};

export default function Card ({ project } : Props){
    return (
        <div className={styles.project__inner}>
            <header>
                <div className={styles.project__top}>
                    <div className={styles.folder}>
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                    </div>
                    <div className={styles.link}>

                        {project.github != undefined ? (
                            <a href={project.github}><FiGithub/></a>
                        ) : ("")}

                        {project.live != undefined ? (
                            <a href={project.live} className={styles.ext}><BiLink /></a>
                        ) : ("")}
        
                    </div>
                </div>
                <h3 className={styles.project__title}>{project?.title}</h3>
                <div className={styles.project__description}>
                    <p>{project?.description}</p>
                </div>
            </header>

            <footer>
                <ul className={styles.techs}>
                    {project?.techs.map((tech, i) => (
                        <li key={i}>{tech}</li>
                    ))}
                </ul>
            </footer>
        </div>
    );
}