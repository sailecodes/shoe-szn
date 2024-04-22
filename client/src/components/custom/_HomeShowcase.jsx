import { Link } from "react-router-dom";
import _HomeShowcaseCategory from "./_HomeShowcaseCategory";

const _HomeShowcase = () => {
  return (
    <section className="home-showcase">
      <_HomeShowcaseCategory headerText="Popular Community Picks" />
      <_HomeShowcaseCategory headerText="Best Streetwear" />
    </section>
  );
};

export default _HomeShowcase;
