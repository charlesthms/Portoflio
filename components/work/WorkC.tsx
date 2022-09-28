import React from "react";
import styles from '../../styles/Work.module.css';
import { Work } from '../../typepings';
import Card from "./Card";

type Props = {
    works: Work[];
};

export default function WorkC({ works } : Props){
    return (
        <section id="work">
            <div className="container">
                <div
                    className={styles.work__heading}
                    data-aos="fade-right"
                >
                    <h1 className="section__title"><span className="accent">~</span>/work</h1>
                    <h3>{"Quelques projets que j'ai réalisés."}</h3>
                </div>
                <ul>
                    {works.map((work, i) => (
                        <Card work={ work } i={i} key={work?._id}/>
                    ))}
                </ul>
            </div>
        </section>
    );
}