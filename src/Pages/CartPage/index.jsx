import Header from "../../Layouts/Header";
import "../../Assets/Styles/CartPage/style.css";
import LeftStroke from "../../Assets/Svgs/CartPage/left (Stroke).svg";
import Ms from "../../Assets/Svgs/CartPage/ms.svg";
import Pu from "../../Assets/Svgs/CartPage/pu.svg";
import DelIc from "../../Assets/Svgs/CartPage/deletecon.svg";
import CartTableItem from "./CartTableItem";

function CartPage() {
  return (
    <>
      <Header />
      <section className="cartbreadcrumb">
        <div className="container">
          <div className="breadcumb">
            <a href="">Home</a>
            <img src={LeftStroke} alt="" />
            <a href="">Add To Cart</a>
          </div>
          <p className="cartbreadcrumb__text">
            Please fill in the fields below and click place order to complete your purchase!
          </p>
          <p className="cartbreadcrumb__text">
            Already registered?{" "}
            <a className="cartbreadcrumb__link" href="">
              Please login here
            </a>
          </p>
        </div>
      </section>

      <section className="cartsection">
        <div className="container">
          <table className="carttable">
            <thead>
              <tr className="">
                <th>Product Details</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Shipping</th>
                <th>subtotal</th>
                <th>action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={{ padding: "70px 0 0 0" }} colSpan={9}></td>
              </tr>
              <CartTableItem />

              <tr>
                <td style={{ padding: "50px 0" }} colSpan={9}>
                  <hr />
                </td>
              </tr>

              <tr className="container">
                <td>
                  <div className="cartorder">
                    <img
                      className="cartorder__image"
                      src="https://s3-alpha-sig.figma.com/img/1d49/8085/cd056686e79c2dee4de64329271d3aac?Expires=1704672000&Signature=qZWlHKzDa2jsEP6E6h0JGa54DvrsS0U4FYFGHYg~O5uO9n8qNqO03oec~EBKNdUCeX9Jseqw5GA8pvim0wFZFDuXSg9c6OHzuXUnqbR9FrA8xoYcRKZQI0QqjkjReiAWHVWTGpzn8fq6k6ciC4JBanKWSdLCoP8-a6cyROXNukrndUf2DQ3Jj8DLvqyAEY15M5RZpeeY1ZsbDLv84h3lK6iAnGM0kZPI9s~oOkDibOodKr--vcV~yQLQbK9woHUJXzDaSMEmlKt470VZ~RrULVqa-MjXHJpk40J1z0CcEkzZtmmFa8kfAleIM720JPHOn0YwnIi0uwC5JsjHWlxWTg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                      alt=""
                    />

                    <div className="cartorder__content">
                      <p className="cartorder__title">Blue Flower Print Crop Top</p>
                      <p className="cartorder__desc">Color : Yellow</p>
                      <p className="cartorder__desc">Size : M</p>
                    </div>
                  </div>
                </td>
                <td className="carttable__text">$29.00</td>
                <td>
                  <div className="quantityel">
                    <button>
                      <img src={Ms} alt="" />
                    </button>
                    <p>1</p>
                    <button>
                      <img src={Pu} alt="" />
                    </button>
                  </div>
                </td>
                <td className="carttable__text">$29.00</td>
                <td className="carttable__text">$29.00</td>
                <td className="carttable__text">
                  <button className="cartsection__svgbutton">
                    <img src={DelIc} alt="" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="cartcheckout">
        <div className="container">
          <div className="cartcheckout__layout">
            <div className="discountse">
              <p className="discountse__title">Discount Codes</p>
              <p className="discountse__desc">Enter your coupon code if you have one</p>
              <div className="discountse__formcoupon">
                <input className="discountse__input" type="text" />
                <button className="discountse__button">Apply Coupon</button>
              </div>

              <button className="discountse__button--white">Continue Shopping</button>
            </div>
            <div className="cartcheckout__checkoutdetails">
              <div className="checkoutdetails">
                <table>
                  <tbody>
                    <tr>
                      <th scope="row">Donuts</th>
                      <td>3,000</td>
                    </tr>
                    <tr>
                      <th scope="row">Stationery</th>
                      <td>18,000</td>
                    </tr>

                    <tr>
                      <th scope="row">Stationery</th>
                      <td>18,000</td>
                    </tr>
                  </tbody>
                </table>

                <hr />

                <a className="checkoutdetails__button" href="">
                  Proceed To Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CartPage;
