import { Link } from "react-router-dom";
import _HomeShowcaseCategory from "./_HomeShowcaseCategory";

const _HomeShowcase = () => {
  return (
    <section className="home-showcase">
      <_HomeShowcaseCategory category="Popular Community Picks" />
      <_HomeShowcaseCategory category="Best Streetwear" />
    </section>
  );
};

export default _HomeShowcase;
