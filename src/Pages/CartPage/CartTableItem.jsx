import Ms from "../../Assets/Svgs/CartPage/ms.svg";
import Pu from "../../Assets/Svgs/CartPage/pu.svg";
import DelIc from "../../Assets/Svgs/CartPage/deletecon.svg";

function CartTableItem({}) {
  return (
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
  );
}

export default CartTableItem;
