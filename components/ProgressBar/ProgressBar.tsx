import React, { useState, useEffect } from "react";
import { useWindowScroll } from 'react-use';
import styles from '../../styles/ProgressBar.module.css';

type Props = {};

export default function ProgressBar({} : Props){
    const { x, y } = useWindowScroll();
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrolled(((y / height) * 100));
    }, [y]);

    return (
        <div className={styles.progress_bar_wrapper}>
            <div className={styles.progress_bar} style={{ height: `${scrolled}%` }}></div>
        </div>
    )
}