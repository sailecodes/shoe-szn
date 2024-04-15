import { Link } from "react-router-dom";

const _Home = () => {
  return (
    <section className="home">
      <section className="home--hero">
        <div />
        <div>
          <p className="home--hero-header">Shoes by the community, for the community</p>
          <p className="home--hero-tag">
            Every pair is chosen by a community of individuals who love and are passionate about shoes. Not a big shoe
            lover? No worries. You&apos;ve still come to the right place.
          </p>
          <Link to="">See our community picks</Link>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </section>
  );
};

export default _Home;
