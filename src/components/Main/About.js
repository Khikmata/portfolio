import React from 'react'
import styles from '../Main/About.module.scss'
const About = (props) => {



	return (
		<>
			<a className={styles[`about${props.scrollPos > 350 && props.scrollPos < 1200 ? '__active' : ''}`]} id='about' href='#about'> Обо мне </a>
			<div className={styles.content__aboutme}>
				<div >
					<div className={styles[`aboutme__card__container__left${props.scrollPos > 550 && props.scrollPos < 750 ? '__active' : ''}`]}>
						<div className={styles.aboutme__card__item}>
							<div className={styles[`aboutme__card__item__left${props.scrollPos >= 550 && props.scrollPos < 750 ? '__active' : ''}`]}>
								<p>Меня зовут Камиль.  Во фронтенд разработке <br /> уже <span>более года</span> </p>
							</div>
						</div>
						<div className={styles[`aboutme__card__item__background__left${props.scrollPos > 550 && props.scrollPos < 750 ? '__active' : ''}`]}></div>
					</div>
					<div className={styles[`aboutme__card__container__right${props.scrollPos > 750 && props.scrollPos < 950 ? '__active' : ''}`]}>
						<div className={styles.aboutme__card__item}>
							<div className={styles[`aboutme__card__item__right${props.scrollPos >= 750 && props.scrollPos < 950 ? '__active' : ''}`]}>
								<p>Работал в <span> 2 веб-студиях </span>, занимался разработкой Frontend части и версткой </p>
							</div>
						</div>
						<div className={styles[`aboutme__card__item__background__right${props.scrollPos > 750 && props.scrollPos < 950 ? '__active' : ''}`]}></div>
					</div>
					<div className={styles[`aboutme__card__container__left${props.scrollPos > 950 && props.scrollPos <= 1200 ? '__active' : ''}`]}>
						<div className={styles.aboutme__card__item}>
							<div className={styles[`aboutme__card__item__left${props.scrollPos >= 950 && props.scrollPos <= 1200 ? '__active' : ''}`]}>
								<p> В поисках места, где я смогу стать лучше :]</p>
							</div>
						</div>
						<div className={styles[`aboutme__card__item__background__left${props.scrollPos > 950 && props.scrollPos <= 1200 ? '__active' : ''}`]}></div>
					</div>
					<div className={styles[`content__background${'' ? '__active' : ''}`]}></div>
				</div>
			</div>
		</>
	)
}

export default About