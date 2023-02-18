import React from 'react'
import styles from './Contacts.module.scss'
import email from '../../assets/icons/email.svg'
import tg from '../../assets/icons/telegram.svg'
import github from '../../assets/icons/github.svg'

const Contacts = (props) => {

	return (

		<div className={styles.contacts}>
			<a className={styles[`contacts__title${props.scrollPos > 2500 ? '__active' : ''}`]} id='contacts' href='#contacts'>Контакты и ссылки</a>
			<div className={styles.contacts__grid__item}>
				<a href='mailto:windycate03@gmail.com' className={styles.contacts__grid__item__container}>
					<img className={styles.contacts__grid__item__container__image} src={email} alt={'email icon'} />
					<p className={styles.contacts__grid__item__container__title}></p>
				</a>
				<a href='https://t.me/Khikmata' className={styles.contacts__grid__item__container}>
					<img className={styles.contacts__grid__item__container__image} src={tg} alt={'tg icon'} />
					<p className={styles.contacts__grid__item__container__title}></p>
				</a>
				<a href='https://https://github.com/Khikmata' className={styles.contacts__grid__item__container}>
					<img className={styles.contacts__grid__item__container__image} src={github} alt={'github icon'} />
					<p className={styles.contacts__grid__item__container__title}></p>
				</a>
			</div>
		</div>
	)
}

export default Contacts