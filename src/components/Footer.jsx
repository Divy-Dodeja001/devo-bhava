import { Link } from "react-router-dom";
import "../css/footer.css";
const Footer = () => {
  return (
    <>
      <div className="mx-auto border-line mb-4"></div>
      <footer id="footer-section">
        <div className="position-relative" style={{ height: "100%" }}>
          <h3 className="sub-heading text-center nelphim mx-auto pt-4">
            Begin Your Journey to an<br></br>Unforgettable Event
          </h3>
          <div className="container container-xl px-lg-4">
            <div className="position-absolute logo-footer-div">
              <Link to={"/"} className="nelphim text-decoration-none logo">
                Devo Bhava
              </Link>
            </div>
            <div className="position-absolute social-links-footer-div">
              <div
                className="d-flex align-items-center"
                style={{ gap: "0.3em" }}
              >
                <div>
                  <Link to="/" className="text-decoration-none">
                    <img
                      src="/public/twitter.png"
                      className="social-media-icons"
                    ></img>
                  </Link>
                </div>
                <div>
                  <Link to="/" className="text-decoration-none">
                    <img
                      src="/public/facebook.png"
                      className="social-media-icons"
                    ></img>
                  </Link>
                </div>
                <div>
                  <Link to="/" className="text-decoration-none">
                    <img
                      src="/public/instagram.png"
                      className="social-media-icons"
                    ></img>
                  </Link>
                </div>
                <div>
                  <Link to="/" className="text-decoration-none">
                    <img
                      src="/public/vimeo.png"
                      className="social-media-icons"
                    ></img>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
