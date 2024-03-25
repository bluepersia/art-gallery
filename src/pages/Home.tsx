import Footer, { Mode } from '../components/Footer';
import styles from './Home.module.css';
import imgHeroMobile from '../img/mobile/image-hero@2x.jpg';
import imgHeroTablet from '../img/tablet/image-hero@2x.jpg';
import imgHeroDesktop from '../img/desktop/image-hero@2x.jpg';
import Button, { Direction } from '../components/Button';
import imgGallery1Mobile from '../img/mobile/image-grid-1@2x.jpg';
import imgGallery1Tablet from '../img/tablet/image-grid-1@2x.jpg';
import imgGallery1Desktop from '../img/tablet/image-grid-1@2x.jpg';
import imgGallery2Mobile from '../img/mobile/image-grid-2@2x.jpg';
import imgGallery2Tablet from '../img/tablet/image-grid-2@2x.jpg';
import imgGallery2Desktop from '../img/tablet/image-grid-2@2x.jpg';
import imgGallery3Mobile from '../img/mobile/image-grid-3@2x.jpg';
import imgGallery3Tablet from '../img/tablet/image-grid-3@2x.jpg';
import imgGallery3Desktop from '../img/tablet/image-grid-3@2x.jpg';
import { Link } from 'react-router-dom';

export default function Home(): JSX.Element {
  return (
    <div className={styles.home}>
      <header className={styles.hero}>
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
        <h1 className={styles.title2}>
          Modern{' '}
          <span className={styles.dark}>
            <span className={styles.light}>A</span>
            <span className={styles.light2}>r</span>t
          </span>{' '}
          Gallery
        </h1>
        <div className={styles.hero_content}>
          <h1 className={styles.title}>Modern Art Gallery</h1>
          <p className={styles.hero_body}>
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
          <Link
            to='/location'
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Button direction={Direction.Right}>Our location</Button>
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.main_top}>
          <img
            src={imgGallery1Mobile}
            alt='Gallery image'
            className={styles.imgGallery1Mobile}
          />
          <div className={styles.main_top_text}>
            <h3 className={styles.main_title}>Your day at the gallery</h3>
            <p className={styles.main_top_body}>
              Wander through our distinct collections and find new insights
              about our artists. Dive into the details of their creative
              process.
            </p>
          </div>

          <img
            src={imgGallery1Tablet}
            alt='Gallery image'
            className={styles.imgGallery1Tablet}
          />
          <img
            src={imgGallery1Desktop}
            alt='Gallery image'
            className={styles.imgGallery1Desktop}
          />
        </div>

        <div className={styles.main_grid}>
          <img
            src={imgGallery2Mobile}
            alt='Gallery image'
            className={styles.imgGallery2Mobile}
          />
          <img
            src={imgGallery2Tablet}
            alt='Gallery image'
            className={styles.imgGallery2Tablet}
          />
          <img
            src={imgGallery2Desktop}
            alt='Gallery image'
            className={styles.imgGallery2Desktop}
          />

          <img
            src={imgGallery3Mobile}
            alt='Gallery image'
            className={styles.imgGallery3Mobile}
          />
          <img
            src={imgGallery3Tablet}
            alt='Gallery image'
            className={styles.imgGallery3Tablet}
          />
          <img
            src={imgGallery3Desktop}
            alt='Gallery image'
            className={styles.imgGallery3Desktop}
          />

          <div className={styles.invitation}>
            <h3 className={styles.invitation_title}>Come & be inspired</h3>
            <p className={styles.invitation_body}>
              We’re excited to welcome you to our gallery and see how our
              collections influence you.
            </p>
          </div>
        </div>
      </main>
      <Footer mode={Mode.Dark} />
    </div>
  );
}
