import "../../Assets/Styles/CartPage/style.css";
import "../../Assets/Styles/AddAddress/style.css";
import "../../Assets/Styles/style.css";
import LeftStroke from "../../Assets/Svgs/CartPage/left (Stroke).svg";
import MyOrderIcon from "../../Assets/Svgs/ContactDetails/my orders.svg";
import UserIcon from "../../Assets/Svgs/ContactDetails/user.svg";

function AddAddress() {
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
              <p className="contactdetailscontent__subtitle">Add Address</p>
              <div className="contactdetailscontent__addressform">
                <div className="form__layout">
                  <div className="formItem">
                    <label className="formItem__label" htmlFor="firstname">
                      First Name*
                    </label>
                    <input
                      id="firstname"
                      className="formItem__input"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>

                  <div className="formItem">
                    <label className="formItem__label" htmlFor="firstname">
                      First Name*
                    </label>
                    <input
                      id="firstname"
                      className="formItem__input"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="form__layout">
                  <div className="formItem">
                    <label className="formItem__label" htmlFor="firstname">
                      Country / Region*
                    </label>
                    <input
                      id="firstname"
                      className="formItem__input"
                      type="text"
                      placeholder="Country / Region"
                    />
                  </div>

                  <div className="formItem">
                    <label className="formItem__label" htmlFor="firstname">
                      Company Name
                    </label>
                    <input
                      id="firstname"
                      className="formItem__input"
                      type="text"
                      placeholder="Company (optional)"
                    />
                  </div>
                </div>
                <div className="form__layout">
                  <div className="formItem">
                    <label className="formItem__label" htmlFor="firstname">
                      Street Address*
                    </label>
                    <input
                      id="firstname"
                      className="formItem__input"
                      type="text"
                      placeholder="House number and street name"
                    />
                  </div>

                  <div className="formItem">
                    <label className="formItem__label" htmlFor="firstname">
                      Apt, suite, unit
                    </label>
                    <input
                      id="firstname"
                      className="formItem__input"
                      type="text"
                      placeholder="apartment, suite, unit, etc. (optional)"
                    />
                  </div>
                </div>
                <div className="form__layout">
                  <div className="formItem">
                    <label className="formItem__label" htmlFor="firstname">
                      City*
                    </label>
                    <input
                      id="firstname"
                      className="formItem__input"
                      type="text"
                      placeholder="Town / City"
                    />
                  </div>
                  <div className="formItem">
                    <label className="formItem__label" htmlFor="firstname">
                      State*
                    </label>
                    <select className="formItem__input" name="" id="">
                      <option value="">State</option>
                    </select>
                  </div>
                </div>
                <div className="form__layout">
                  <div className="formItem">
                    <label className="formItem__label" htmlFor="firstname">
                      Phone*
                    </label>
                    <input
                      id="firstname"
                      className="formItem__input"
                      type="text"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="formItem">
                    <label className="formItem__label" htmlFor="firstname">
                      Postal Code*
                    </label>
                    <input
                      id="firstname"
                      className="formItem__input"
                      type="text"
                      placeholder="Postal Code"
                    />
                  </div>
                </div>
                <div className="form__layout">
                  <div className="formItem">
                    <label className="formItem__label" htmlFor="firstname">
                      Delivery Instruction
                    </label>
                    <textarea
                      className="formItem__input"
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
                <div className="addresscheckbox">
                  <div className="checkbox shippingcheckbox">
                    <input type="checkbox" name="" id="" />
                    <label className="" htmlFor="firstname">
                      Set as default shipping address
                    </label>
                  </div>

                  <div className="checkbox">
                    <input type="checkbox" name="" id="" />
                    <label className="" htmlFor="firstname">
                      Set as default billing address
                    </label>
                  </div>
                </div>
                <div className="contactdetailscontent__formactions">
                  <button type="submit">Save</button>
                  <button>Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddAddress;
