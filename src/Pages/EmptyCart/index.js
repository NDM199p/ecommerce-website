import Header from "../../Layouts/Header";
import "../../Assets/Styles/EmptyCart/style.css";
import EmptyCartSvg from "../../Assets/Svgs/EmptyCart/Frame 376.svg";
import { Link } from "react-router-dom";

function EmptyCartPage() {
  return (
    <>
      <Header />
      <section className="emptycart">
        <img src={EmptyCartSvg} />

        <p className="emptycart__title">Your cart is empty and sad :(</p>
        <p className="emptycart__describe">Add something to make it happy!</p>

        <Link to={"/"} className="emptycart__button">
          Continue Shopping
        </Link>
      </section>
    </>
  );
}

export default EmptyCartPage;
