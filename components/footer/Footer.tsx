import React, { useRef } from "react";
import styles from '../../styles/Footer.module.css';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

type Props = {};

export default function Contact({} : Props) {
    return (
        <footer className={styles.footer}>
            <a href="#header" className={styles.logo}>Charles Thomas</a>

            <ul className={styles.permalinks}>
                <li><a href="#header">~/home</a></li>
                <li><a href="#work">~/work</a></li>
                <li><a href="#contact">~/contact</a></li>
            </ul>
            
            <div className={styles.footer__socials}>
                <a href="https://github.com/charlesthms" target="_blank" rel="noreferrer"><BsGithub /></a>
                <a href="https://linkedin.com/in/charles-thomas-000388251" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                <a href="mailto:charles.thms77@gmail.com"><HiOutlineMail /></a>
            </div>

            <div className={styles.footer__copyright}>
                <small>Designé & Créé par Charles Thomas</small>
            </div>
        </footer>
    );
}