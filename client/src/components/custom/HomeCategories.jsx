import HomeCategoriesItem from "./HomeCategoriesItem";

const HomeCategories = () => {
  return (
    <section className="home-categories">
      <div>
        <HomeCategoriesItem category="Casual" toLink="/casual" />
        <HomeCategoriesItem category="Streetwear" toLink="/streetwear" />
        <HomeCategoriesItem category="Comfy" toLink="/comfy" />
        <HomeCategoriesItem category="Community Picks" toLink="/community-picks" />
      </div>
    </section>
  );
};

export default HomeCategories;
