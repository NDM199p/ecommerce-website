import "../../Assets/Styles/CartPage/style.css";
import "../../Assets/Styles/ContactDetails/style.css";
import "../../Assets/Styles/style.css";
import LeftStroke from "../../Assets/Svgs/CartPage/left (Stroke).svg";
import MyOrderIcon from "../../Assets/Svgs/ContactDetails/my orders.svg";
import UserIcon from "../../Assets/Svgs/ContactDetails/user.svg";

function ContactDetails() {
  return (
    <>
      <section className="cartbreadcrumb">
        <div className="container">
          <div className="breadcumb">
            <a href="">Home</a>
            <img src={LeftStroke} alt="" />
            <a href="">Add To Cart</a>
          </div>
        </div>
      </section>

      <section className="contactdetails">
        <div className="container">
          <div className="contactdetailsnav__layout">
            <div className="contactdetailsnav">
              <div className="contactdetailsnav__title">
                <span></span>
                <p>Hello Jhanvi</p>
              </div>
              <div className="contactdetailsnav__describe">
                <p>Welcome to your Account</p>
              </div>

              <div className="contactdetailsnav__listnav">
                <ul className="contactdetailsnav__list">
                  <li className="contactdetailsnav__listitem">
                    <a href="">
                      <img src={MyOrderIcon} alt="" />
                      <p>My orders</p>
                    </a>
                  </li>
                  <li className="contactdetailsnav__listitem contactdetailsnav__listitem--active">
                    <a href="">
                      <img src={UserIcon} alt="" />
                      <p>My info</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contactdetailscontent">
              <p className="contactdetailscontent__title">My Info</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactDetails;
