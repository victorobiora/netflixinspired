import RegisterSection from "./RegisterSection";
import HomeContainer from "./HomeContainer";
import styles from "./HomePage.module.css";
import HomeFooter from "./HomeFooter";

const HomePage = (props) => {
  return (
    <main className={styles.Homepage}>

      <RegisterSection />
      <HomeContainer>
        <div className={styles.imageDiv}>
          <img
            alt="download"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          />
        </div>
        <div className={styles.itemText}>
          <h2>Download your shows to watch offline</h2>
          <p>Save your favorites easily and always have something to watch.</p>
        </div>
      </HomeContainer>
      <HomeContainer>
        <div className={styles.itemText}>
          <h2>Enjoy on your TV</h2>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className={styles.imageDiv}></div>
      </HomeContainer>
      <HomeContainer>
        <div className={styles.itemText}>
          <h2>Watch everywhere</h2>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className={styles.imageDiv}></div>
      </HomeContainer>
      <HomeContainer>
        <div className={styles.imageDiv}>
          <img
            alt="kids"
            src="https://occ-0-7334-300.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
          />
        </div>
        <div className={styles.itemText}>
          <h2>Create profiles for kids</h2>
          <p>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
      </HomeContainer>
      <HomeContainer>
        <HomeFooter />
      </HomeContainer>
    </main>
  );
};

export default HomePage;
