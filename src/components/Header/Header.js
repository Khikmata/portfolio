import React, { useState } from 'react'
import styles from '../Header/Header.module.scss'
import about from './header-icons/about.png'
import contacts from './header-icons/contact-mail.png'
import skills from './header-icons/pencil.png'
import projects from './header-icons/project-plan.png'
import close from './header-icons/x.png'


const Header = () => {


	const [burgerOpen, setBurgerOpen] = useState(false);


	return (
		<header className={styles.header}>
			<div className={styles.background} />
			<nav>
				<div className={styles.nav__leftside}>
					<ul className={styles.nav__leftside__links}>
						<li><a href='#about'>About me</a></li>
						<li><a href='#skills'>Skills</a></li>
						<li><a href='#projects'>My Projects</a></li>
						<li><a href='#contacts'>Contacts</a></li>
					</ul>
					<div onClick={() => setBurgerOpen(!burgerOpen)} className={styles.burger__menu}>
						{
							!burgerOpen ?
								<>
									<span className={styles.burger__menu__lines}></span>
									<span className={styles.burger__menu__lines}></span>
									<span className={styles.burger__menu__lines}></span>
								</> :
								<img className={styles.burger__menu__close} width={25} src={close} alt='Close Icon' ></img>
						}

						<ul className={styles[`${burgerOpen ? 'burger__menu__list__active' : 'burger__menu__list'}`]}>
							<li><a href='#about'><img width={30} src={about} alt='About Icon' /></a></li>
							<li><a href='#skills'><img width={30} src={skills} alt='About Icon' /></a></li>
							<li><a href='#projects'><img width={30} src={projects} alt='About Icon' /></a></li>
							<li><a href='#contacts'><img width={30} src={contacts} alt='About Icon' /></a></li>
						</ul>
					</div>

				</div>
				<div className={styles.nav__rightside}>
					<a href='https://kazan.hh.ru/resume/42354495ff0b6c9a8b0039ed1f4974684c4345'>Resume</a>
				</div>
			</nav>
			<div className={styles.content}>
				<h1>Hello, </h1>
				<p className={styles.green}> <span> Welcome to my </span> portfolio page  </p>
				<p> </p>
			</div>

		</header>
	)
}

export default Header