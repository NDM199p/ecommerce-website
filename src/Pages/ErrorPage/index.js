import Header from "../../Layouts/Header";
import "../../Assets/Styles/ErrorPage/style.css";
import NotFoundSvg from "../../Assets/Svgs/ErrorPage/Frame 453.svg";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <Header />
      <section className="errorsection">
        <img src={NotFoundSvg} />

        <p className="errorsection__title">Oops! Page not found</p>
        <p className="errorsection__describe">
          The page you are looking for might have been removed or temporarily unavailable.
        </p>

        <Link to={"/"} className="errorsection__button">
          Back to HomePage
        </Link>
      </section>
    </>
  );
}

export default NotFoundPage;
