import styles from "./Pricing.module.css";
import PageNav from "../components/PageNav";

const Pricing = () => {
  return (
    <main className={styles.pricing}>
      <PageNav />

      <section>
        <div className={styles.textContainer}>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            For just $9 a month, unlock the full potential of the WorldWise App.
            Gain unlimited access to advanced features, including geolocation,
            dynamic city data fetching, personalized city tracking, and the
            ability to add detailed notes about your experiences. Plus, enjoy
            quick and direct access to Wikipedia for each city, providing you
            with valuable information at your fingertips. WorldWise makes it
            easy to keep a comprehensive record of all your travel destinations,
            seamlessly integrating into your daily life.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
};

export default Pricing;
