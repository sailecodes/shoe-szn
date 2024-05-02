import banana from "../../assets/imgs/VU-Banana-1000x1000.png";

const _Item = () => {
  return (
    <section className="itemm">
      <img src={banana} alt="" />
      <div className="itemm--details">
        <p className="itemm--details-name">Nike Earths</p>
        <p className="itemm--details-price">$99.99</p>
        <p className="itemm--details-description">
          It’s our bestselling boot - but upgraded. Be anywhere and do anything, in a boot that does it all. The Z is
          made with a water resistant upper, extra warm lining and grippy rubber sole. Featuring an inside zip that
          makes it easy to slip them on-and-off for life on the go. And the best part - each pair is 100% vegan and made
          with 95% natural and recycled materials.
        </p>
        <form>
          <select>
            <option value="" selected disabled hidden>
              Size
            </option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9.5">9.5</option>
            <option value="12">12</option>
          </select>
          <button>Add to cart</button>
        </form>
        <div className="itemm--details-highlights">
          <div>
            <header>Eco-friendly</header>
            <p>The fabric is reusable.</p>
          </div>
          <div>
            <header>Uniquely produced</header>
            <p>We have dedicated, friendly work areas with well-trained staff.</p>
          </div>
          <div>
            <header>Long-lasting</header>
            <p>Very durable.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default _Item;
