import styles from "./Product.module.css";
import PageNav from "../components/PageNav";

const Product = () => {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            The WorldWise App is your personal travel log, designed to help you
            register and track all the cities you have visited around the globe.
            With a user-friendly interface and advanced features like
            geolocation, the app automatically fetches dynamic city data, making
            it easier for you to record your travels.
          </p>
          <p>
            WorldWise provides a seamless and efficient experience, ensuring
            that adding new destinations to your journey is quick and intuitive.
            Whether you are a frequent traveler or just exploring new places,
            WorldWise helps you document your adventures effortlessly.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Product;
