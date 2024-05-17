import HomeCategoriesItem from "./HomeCategoriesItem";

const HomeCategories = () => {
  return (
    <section className="home-categories">
      <div>
        <HomeCategoriesItem category="Casual" />
        <HomeCategoriesItem category="Streetwear" />
        <HomeCategoriesItem category="Comfy" />
        <HomeCategoriesItem category="Community Picks" />
      </div>
    </section>
  );
};

export default HomeCategories;
