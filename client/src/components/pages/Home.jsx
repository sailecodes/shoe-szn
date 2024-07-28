import { Link } from "react-router-dom";
import { IoLogoGoogle, IoLogoFirebase, IoLogoGitlab, IoLogoInstagram } from "react-icons/io5";
import heroBg from "../../assets/imgs/hero1.png";
import HomeShowcase from "../custom/HomeShowcase";
import HomeCategories from "../custom/HomeCategories";
import HomeSlider from "../custom/HomeSlider";

const Home = () => {
  return (
    <section className="home">
      <section className="home--hero">
        <div style={{ backgroundImage: `url(${heroBg})` }}>
          <div>
            <p className="home--hero-header">Shoes by the community, for the community</p>
            <p className="home--hero-tag">
              Every pair is chosen by a community of individuals who love and are passionate about shoes. Not a big shoe
              lover? No worries. You&apos;ve still come to the right place.
            </p>
            <Link to="community-picks">See our community picks</Link>
          </div>
        </div>
        <div>
          <p className="home--hero-header">Shoes by the community, for the community</p>
          <p className="home--hero-tag">
            Every pair is chosen by a community of individuals who love and are passionate about shoes. Not a big shoe
            lover? No worries. You&apos;ve still come to the right place.
          </p>
          <Link to="">See our community picks</Link>
        </div>
      </section>
      <HomeShowcase />
      <section className="home--team">
        <p className="home--team-header">Want to be a part of our team?</p>
        <p className="home--team-tag">
          We have members from all over the world bringing their unique, individual insights and appreciation of shoes
          into the mix. Get in contact with us and be a part of our collaborative experience.
        </p>
        <p className="home--team-email">
          Email us at <span>team@shoeszn.com</span>.
        </p>
      </section>
      <HomeCategories />
      <HomeSlider />
      <section className="home--sponsors">
        <div>
          <IoLogoGoogle />
          <IoLogoFirebase />
          <IoLogoGitlab />
          <IoLogoInstagram />
        </div>
      </section>
    </section>
  );
};

export default Home;
