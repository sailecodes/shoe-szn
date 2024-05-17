import HomeShowcaseCategory from "./HomeShowcaseCategory";

const HomeShowcase = () => {
  return (
    <section className="home-showcase">
      <HomeShowcaseCategory category="Popular Community Picks" />
      <HomeShowcaseCategory category="Best Streetwear" />
    </section>
  );
};

export default HomeShowcase;
