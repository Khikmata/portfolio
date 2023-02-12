import { useEffect, useState } from 'react';
import styles from './app.module.scss'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';


function App() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let timeoutId;
    // Set up the scroll event listener
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScrollY(window.pageYOffset);
      }, 0);

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (


    <div className="App">
      <div className={styles.container}>
        <Header />
        <Main scrollPos={scrollY} />
        <Footer scrollPos={scrollY} />
      </div >
    </div>
  );
}

export default App;
