import React from 'react'
import styles from '../Header/Header.module.scss'
const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.background} />
			<nav>
				<div className={styles.nav__leftside}>
					<ul>
						<li><a href='#about'>About me</a></li>
						<li><a href='#skills'>Skills</a></li>
						<li><a href='#projects'>My Projects</a></li>
						<li><a href='#contacts'>Contacts</a></li>
					</ul>
					<div className={styles.burger__menu}>
						<span className={styles.burger__menu__lines}></span>
						<span className={styles.burger__menu__lines}></span>
						<span className={styles.burger__menu__lines}></span>

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