import React from 'react'
import styles from '../Main/Main.module.scss'
import About from './About';
import Projects from './Projects';
import Skills from './Skills';


const Main = (props) => {




	return (<>

		<main className={styles.main}>
			<About scrollPos={props.scrollPos} />
			<Skills scrollPos={props.scrollPos} />
			<Projects scrollPos={props.scrollPos} />
		</main>
	</>
	)
}

export default Main;