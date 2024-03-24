import Footer, { Mode } from '../components/Footer';
import styles from './Home.module.css';
import imgHeroMobile from '../img/mobile/image-hero@2x.jpg';
import imgHeroTablet from '../img/tablet/image-hero@2x.jpg';
import imgHeroDesktop from '../img/desktop/image-hero@2x.jpg';
import Button, { Direction } from '../components/Button';

export default function Home(): JSX.Element {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <div className={styles.gridBlack}></div>
        <img
          className={styles.imgHeroMobile}
          src={imgHeroMobile}
          alt='Gallery piece on display'
        />
        <img
          className={styles.imgHeroTablet}
          src={imgHeroTablet}
          alt='Gallery piece on display'
        />
        <img
          className={styles.imgHeroDesktop}
          src={imgHeroDesktop}
          alt='Gallery piece on display'
        />
        <div className={styles.heroContent}>
          <h1 className={styles.h1}>Modern Art Gallery</h1>
          <p className={styles.heroBody}>
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
          <Button direction={Direction.Right}>Out location</Button>
        </div>
      </header>
      <Footer mode={Mode.Dark} />
    </div>
  );
}
