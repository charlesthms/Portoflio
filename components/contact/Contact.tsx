import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import styles from '../../styles/Contact.module.css';

type Props = {};

export default function Contact({} : Props) {

    return (
        <section id="contact" className='container'>
            <div
                className={styles.contact__heading}
                data-aos="fade-right"
            >
                <h1 className='section__title'><span className='accent'>~</span>/contact</h1>
                <h3>Me contacter</h3>
            </div>

            <div className={styles.contact__container}>
                <div
                    className={styles.contact__options}
                    data-aos="fade-right"
                >
                    <article className={styles.contact__option}>
                        <HiOutlineMail className={styles.contact__icon} />
                        <h4>Email</h4>
                        <h5>charles.thms77@gmail.com</h5>
                        <a href="mailto:charles.thms77@gmail.com">Envoyer un message</a>
                    </article>
                </div>

                <form
                    className={styles.form}
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <input className={styles.input} type="text" name='name' placeholder='Votre nom' required />
                    <input className={styles.input} type="email" name="email" placeholder='Votre email' required />
                    <textarea className={styles.textarea} name="message" rows={7} placeholder='Votre message' required></textarea>
                    <button type='submit' className='btn'>Envoyer</button>
                </form>
            </div>

        </section>
    );
}