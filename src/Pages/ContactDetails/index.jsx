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
              <p className="contactdetailscontent__subtitle">Contact Details</p>
              <div className="contactdetailscontent__form">
                <div className="contactdetailscontent__input">
                  <label htmlFor="">Your Name</label>
                  <input type="text" name="" id="" placeholder="Jhanvi Shah" disabled />
                </div>

                <button>
                  <p>Change</p>
                </button>
              </div>
              <hr />
              <div className="contactdetailscontent__form">
                <div className="contactdetailscontent__input">
                  <label htmlFor="">Email Address</label>
                  <input type="text" name="" id="" placeholder="Jhanvi@gmail.com" disabled />
                </div>

                <button>
                  <p>Change</p>
                </button>
              </div>
              <hr />
              <div className="contactdetailscontent__form">
                <div className="contactdetailscontent__input">
                  <label htmlFor="">Phone Number</label>
                  <input type="text" name="" id="" placeholder="8980252445" disabled />
                </div>

                <button>
                  <p>Change</p>
                </button>
              </div>
              <hr />
              <div className="contactdetailscontent__form">
                <div className="contactdetailscontent__input">
                  <label htmlFor="">Password</label>
                  <input type="password" name="" id="" value={"2432"} disabled />
                </div>

                <button>
                  <p>Change</p>
                </button>
              </div>
              <div className="contactdetailscontent__element">
                <div className="contactdetailscontent__subtitlelayout">
                  <p className="contactdetailscontent__subtitle">Address</p>
                  <button className="contactdetailscontent__subtitletext">Add New</button>
                </div>
                <div className="contactdetailscontent__elementcontent">
                  <div className="contactdetailscontent__adddressgrid">
                    <div className="addresscard">
                      <p className="addresscard__title">Jhanvi shah</p>
                      <div className="addresscard__subtitle">8980252445</div>
                      <div className="addresscard__describe">
                        1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Vijaynagar
                        road
                      </div>
                      <div className="addresscard__taglayout">
                        <button>Home</button>
                        <button>Default billing address</button>
                      </div>
                      <div className="addresscard__actions">
                        <a href="">Remove</a>
                        <a href="">Edit</a>
                      </div>
                    </div>

                    <div className="addresscard">
                      <p className="addresscard__title">Jhanvi shah</p>
                      <div className="addresscard__subtitle">8980252445</div>
                      <div className="addresscard__describe">
                        1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Vijaynagar
                        road
                      </div>
                      <div className="addresscard__taglayout">
                        <button>Home</button>
                        <button>Default billing address</button>
                      </div>
                      <div className="addresscard__actions">
                        <a href="">Remove</a>
                        <a href="">Edit</a>
                      </div>
                    </div>

                    <div className="addresscard">
                      <p className="addresscard__title">Jhanvi shah</p>
                      <div className="addresscard__subtitle">8980252445</div>
                      <div className="addresscard__describe">
                        1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Vijaynagar
                        road
                      </div>
                      <div className="addresscard__taglayout">
                        <button>Home</button>
                        <button>Default billing address</button>
                      </div>
                      <div className="addresscard__actions">
                        <a href="">Remove</a>
                        <a href="">Edit</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactDetails;
