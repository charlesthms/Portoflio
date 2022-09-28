import React from "react";
import styles from '../../styles/Header.module.css';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

type Props = {};

export default function HeaderSocials({}: Props){
    return (
        <div
            className={styles.header__socials}
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1000"
        >
            <a href="https://github.com/charlesthms" target="_blank" rel="noreferrer"><BsGithub /></a>
            <a href="https://linkedin.com/in/charles-thomas-000388251" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="mailto:charles.thms77@gmail.com" target="_blank" rel="noreferrer"><HiOutlineMail /></a>
        </div>
    )
}