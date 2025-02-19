import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/about.css";

const About = () => {
  return (
    <>
      <Navbar />
      {/* main section about us */}
      <div id="about-us-main-section">
        <div
          id="page-heading-section"
          className="container-fluid container-xl pt-5 pb-3 py-lg-5 position-relative"
        >
          <h1 className="sub-heading nelphim">About Us</h1>
          <div
            className="position-absolute d-lg-none"
            style={{ top: "0%", right: "0%", zIndex: -1 }}
          >
            <img
              src="/public/small-rightVector.svg"
              className="img-fluid"
            ></img>
          </div>
        </div>
        <div
          id="hero-section-about-us"
          className="position-relative mb-5 mb-lg-0"
        >
          <div className="hero-banner-text w-100">
            <div className="container-fluid container-sm mb-3 mb-lg-0">
              <h1 className="nelphim hero-heading mb-3 mb-lg-0">
                Where Every Moment Becomes a Memory
              </h1>
              <p>
                Discover the story behind DevoBhava, a trusted name in event
                management, transforming occasions into unforgettable
                experiences.
              </p>
            </div>
          </div>
          <picture>
            <source
              media="(max-width:650px)"
              srcSet="/public/mobile/hero-banner-about-us-mobile.jpg"
            />
            <source
              media="(min-width:651px)"
              srcSet="/public/hero-banner-about-us.jpg"
            />
            <img
              src="/public/hero-banner-about-us.jpg"
              className="w-100 px-3 px-lg-0"
              alt=""
              srcSet=""
            />
          </picture>
        </div>
        <div
          id="our-story-about-us"
          className="container-fluid container-xl py-lg-5 my-lg-5"
        >
          <div className="row p-0">
            <div className="col-12 col-md-6 our-story-text">
              <div>
                <h3 className="mb-4 pb-lg-4 nelphim sub-heading">Our Story</h3>
                <p className="mb-3">
                  DevoBhava was founded in 2021 by Shalini Khanna, a seasoned
                  event expert and Director of the ICE Group of Companies. As a
                  subsidiary of ICE Group—renowned for its global events and
                  prestigious clientele, including HCL, Pepsico, and
                  Bajaj—DevoBhava embodies a legacy of excellence with a fresh
                  perspective
                </p>
                <p className="mb-3">
                  With over 20 years of experience and more than 1,500 weddings
                  and events executed, we combine unmatched expertise with a
                  personalized approach to create events that are elegant,
                  seamless, and uniquely yours.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 ps-lg-4 d-none d-md-flex our-story-image">
              <img src="/public/our-story.jpg" className="w-75"></img>
            </div>
            <div className="col-12 col-md-6 ps-lg-4 d-lg-none d-flex our-story-image">
              <img
                src="/public/mobile/our-story-mobile.jpg"
                className="w-100"
              ></img>
            </div>
          </div>
        </div>
        <div className="position-relative">
          <div
            className="position-absolute"
            style={{ top: "-70%", left: "0%", zIndex: -1 }}
          >
            <img src="/public/small-leftVector.svg" className="img-fluid"></img>
          </div>
          <div
            className="position-absolute d-none d-md-block"
            style={{ bottom: "5%", right: "0%", zIndex: -1 }}
          >
            <img
              src="/public/small-rightVector.svg"
              className="img-fluid"
            ></img>
          </div>
          <div
            id="founder"
            className="container-fluid container-xl py-5 my-lg-5"
          >
            <div className="line-primary mx-auto"></div>
            <h3 className="nelphim sub-heading text-center mt-3 m mb-4 pb-lg-4">
              Meet the Founder
            </h3>
            <div className="mb-lg-5 mb-4 d-flex justify-content-center">
              <img src="/public/founder.png" className="col-6 col-md-3"></img>
            </div>
            <div>
              <p className="text-center">
                With over 13 years of experience and a portfolio of 1,500+
                weddings, Shalini Khanna has established herself as a pioneer in
                event management. As the founder of Devo Bhava and Director of
                ICE Group, she brings her expertise and passion to every
                project, ensuring that every event reflects elegance, precision,
                and creativity.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;