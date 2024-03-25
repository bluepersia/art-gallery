import styles from './Location.module.css';
import imgMapMobile from '../img/mobile/image-map@2x.png';
import imgMapTablet from '../img/tablet/image-map@2x.png';
import imgMapDesktop from '../img/desktop/image-map@2x.png';
import Button, { Direction } from '../components/Button';
import Footer, { Mode } from '../components/Footer';
export default function Location(): JSX.Element {
  return (
    <div className={styles.location}>
      <section className={styles.map}>
        <img src={imgMapMobile} alt='Map' className={styles.imgMapMobile} />
        <img src={imgMapTablet} alt='Map' className={styles.imgMapTablet} />
        <img src={imgMapDesktop} alt='Map' className={styles.imgMapDesktop} />
        <Button className={styles.btnBack} direction={Direction.Left}>
          Back to home
        </Button>
      </section>

      <section className={styles.info}>
        <h2 className={styles.infoTitle}>Our location</h2>
        <div className={styles.infoContent}>
          <h4 className={styles.infoSubtitle}>99 King Street</h4>
          <p className={styles.infoAddress}>
            Newport RI 02840 United States of America
          </p>
          <p className={styles.infoBody}>
            Our newly opened gallery is located near the Edward King House on 99
            King Street, the Modern Art Gallery is free to all visitors and open
            seven days a week from 8am to 9pm.
          </p>
        </div>
      </section>

      <Footer mode={Mode.Light} />
    </div>
  );
}
