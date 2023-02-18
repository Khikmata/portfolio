import React from 'react'
import styles from '../Main/Projects.module.scss'
import reactPizzaIcon from '../../assets/icons/react-pizza.svg'
import reactCinemaIcon from '../../assets/icons/react-cinema.svg'


const Projects = (props) => {
	return (
		<div className={styles.projects}>
			<a className={styles[`projects${props.scrollPos > 2000 && props.scrollPos < 2500 ? '__active' : ''}`]} href='#projects'>Пет-проекты <br /></a>
			<div className={styles.projects__grid__item}>
				<a href='https://github.com/Khikmata/pizza-shop' className={styles.projects__grid__item__container}>
					<img className={styles.projects__grid__item__container__image} src={reactPizzaIcon} alt={'react-pizza'} />
					<div className={styles.projects__grid__item__container__title}> React pizza </div>
				</a>
				<a href='https://github.com/Khikmata/react-cinema' className={styles.projects__grid__item__container}>
					<img className={styles.projects__grid__item__container__image} src={reactCinemaIcon} alt={'react-pizza'} />
					<div className={styles.projects__grid__item__container__title}> React cinema </div>
				</a>
			</div>
			<div className={styles.content__background}></div>
		</div>

	)
}

export default Projects