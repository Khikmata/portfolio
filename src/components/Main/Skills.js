import React, { useState } from 'react'
import styles from '../Main/Skills.module.scss'

import reactIcon from '../../assets/icons/react.svg'
import htmlIcon from '../../assets/icons/html.svg'
import reduxIcon from '../../assets/icons/redux.svg'
import gitIcon from '../../assets/icons/git.svg'
import cssIcon from '../../assets/icons/css.svg'
import figmaIcon from '../../assets/icons/figma.svg'
import jsIcon from '../../assets/icons/js.svg'
import tsIcon from '../../assets/icons/ts.svg'

const Skills = (props) => {

	const [animation, setAnimation] = useState(true);


	if (props.mousePos >= 1450) {
		setAnimation(false)

	}


	return (
		<div className={styles.skill}>
			<a id='skills' className={styles[`skill${props.scrollPos > 1300 && props.scrollPos < 1700 ? '__active' : ''}`]} href='#skills'>Skills</a>

			<div className={styles.skill__grid}>

				<div className={styles.skill__grid__item}>
					<div className={styles.skill__grid__item__container}>
						<img className={styles.skill__grid__item__container__image} src={reactIcon} alt={'reactIcon'} />
						<div className={styles.skill__grid__item__container__title}> React</div>
					</div>
				</div>
				<div className={styles.skill__grid__item}>
					<div className={styles.skill__grid__item__container}>
						<img className={styles.skill__grid__item__container__image} src={htmlIcon} alt={'htmlIcon'} />
						<div className={styles.skill__grid__item__container__title}> HTML </div>
					</div>
				</div>
				<div className={styles.skill__grid__item}>
					<div className={styles.skill__grid__item__container}>
						<img className={styles.skill__grid__item__container__image} src={cssIcon} alt={'cssIcon'} />
						<div className={styles.skill__grid__item__container__title}> CSS </div>
					</div>
				</div>
				<div className={styles.skill__grid__item}>
					<div className={styles.skill__grid__item__container}>
						<img className={styles.skill__grid__item__container__image} src={jsIcon} alt={'jsIcon'} />
						<div className={styles.skill__grid__item__container__title}> Javascript </div>
					</div>
				</div>
				<div className={styles.skill__grid__item}>
					<div className={styles.skill__grid__item__container}>
						<img className={styles.skill__grid__item__container__image} src={reduxIcon} alt={'reduxIcon'} />
						<div className={styles.skill__grid__item__container__title}> Redux </div>
					</div>
				</div>
				<div className={styles.skill__grid__item}>
					<div className={styles.skill__grid__item__container}>
						<img className={styles.skill__grid__item__container__image} src={figmaIcon} alt={'figmaIcon'} />
						<div className={styles.skill__grid__item__container__title}> Figma </div>
					</div>
				</div>
				<div className={styles.skill__grid__item}>
					<div className={styles.skill__grid__item__container}>
						<img className={styles.skill__grid__item__container__image} src={gitIcon} alt={'gitIcon'} />
						<div className={styles.skill__grid__item__container__title}> Git </div>
					</div>
				</div>
				<div id='projects' className={styles.skill__grid__item}>
					<div className={styles.skill__grid__item__container}>
						<img className={styles.skill__grid__item__container__image} src={tsIcon} alt={'tsIcon'} />
						<div className={styles.skill__grid__item__container__title}> Typescript </div>
					</div>
				</div>
			</div>
			<div className={styles[`content__background${animation && props.mousePos > 1400 ? '__active' : ''}`]}></div>
		</div>
	)
}

export default Skills