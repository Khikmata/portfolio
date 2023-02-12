import React from 'react'
import styles from '../Main/About.module.scss'
const About = (props) => {



	return (
		<>
			<a className={styles[`about${props.scrollPos > 350 && props.scrollPos < 1200 ? '__active' : ''}`]} id='about' href='#about'> About me </a>
			<div className={styles.content__aboutme}>
				<div >
					<div className={styles[`aboutme__card__container__left${props.scrollPos > 550 && props.scrollPos < 750 ? '__active' : ''}`]}>
						<div className={styles.aboutme__card__item}>
							<div className={styles[`aboutme__card__item__left${props.scrollPos >= 550 && props.scrollPos < 750 ? '__active' : ''}`]}>
								<p>My name is <span>Kamil</span>.  i’m a frontend developer <br /> from Kazan </p>
							</div>
						</div>
						<div className={styles[`aboutme__card__item__background__left${props.scrollPos > 550 && props.scrollPos < 750 ? '__active' : ''}`]}></div>
					</div>
					<div className={styles[`aboutme__card__container__right${props.scrollPos > 750 && props.scrollPos < 950 ? '__active' : ''}`]}>
						<div className={styles.aboutme__card__item}>
							<div className={styles[`aboutme__card__item__right${props.scrollPos >= 750 && props.scrollPos < 950 ? '__active' : ''}`]}>
								<p>Worked for <span>over 1 year </span>  as a layout designer & frontend developer </p>
							</div>
						</div>
						<div className={styles[`aboutme__card__item__background__right${props.scrollPos > 750 && props.scrollPos < 950 ? '__active' : ''}`]}></div>
					</div>
					<div className={styles[`aboutme__card__container__left${props.scrollPos > 950 && props.scrollPos <= 1200 ? '__active' : ''}`]}>
						<div className={styles.aboutme__card__item}>
							<div className={styles[`aboutme__card__item__left${props.scrollPos >= 950 && props.scrollPos <= 1200 ? '__active' : ''}`]}>
								<p> Love drawing and playin videogames <br /> in my free time :) </p>
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