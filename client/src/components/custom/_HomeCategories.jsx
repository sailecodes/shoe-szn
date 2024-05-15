import _HomeCategoriesItem from "./_HomeCategoriesItem";

const _HomeCategories = () => {
  return (
    <section className="home-categories">
      <div>
        <_HomeCategoriesItem category="Casual" />
        <_HomeCategoriesItem category="Streetwear" />
        <_HomeCategoriesItem category="Comfy" />
        <_HomeCategoriesItem category="Community Picks" />
      </div>
    </section>
  );
};

export default _HomeCategories;
