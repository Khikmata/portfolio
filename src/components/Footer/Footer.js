import React from 'react'
import styles from '../Footer/footer.module.scss'
import Contacts from './Contacts'

const Footer = (props) => {
	return (
		<footer className={styles.footer}>
			<div className={styles.background} />
			<div >
				<Contacts scrollPos={props.scrollPos} />
			</div>
			<a className={styles.figma} href='https://www.figma.com/file/lJZjXHYAc8qdYbPEG63pKa/Untitled?node-id=1%3A2&t=Wk6lOZKxYlI1ulmW-1'>Figma</a>
		</footer>
	)
}

export default Footer