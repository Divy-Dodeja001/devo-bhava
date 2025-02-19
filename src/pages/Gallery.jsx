import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/gallery.css";
import ContactForm from "../components/contactForm";

const Gallery = () => {
  return (
    <>
      <Navbar />
      {/* main section gallery page */}
      <div id="gallery-main-section">
        <div id="hero-section-gallery" className="position-relative">
          <div
            className="position-absolute d-lg-none"
            style={{ top: "0%", right: "0%", zIndex: -1 }}
          >
            <img
              src="/public/small-rightVector.svg"
              className="img-fluid"
            ></img>
          </div>
          <div className="hero-banner-text w-100">
            <div className="py-5 py-lg-0 container-fluid container-sm">
              <h1 className="nelphim hero-heading">A Glimpse of Forever</h1>
              <p>
                Experience the Magic: A Showcase of Our Most Breathtaking
                Weddings & Celebrations.
              </p>
            </div>
          </div>
          <picture>
            <source
              media="(max-width:650px)"
              srcSet="/public/mobile/hero_gallery-mobile.jpg"
            />
            <source
              media="(min-width:651px)"
              srcSet="/public/hero-gallery.jpg"
            />
            <img
              src="/public/hero_gallery.jpg"
              className="w-100 px-3 px-lg-0"
              alt=""
              srcSet=""
            />
          </picture>
        </div>
        <div
          id="moments-sections"
          className="container-fluid container-xl py-lg-5 py-5 my-lg-5 px-3 px-lg-0"
        >
          <div className="row py-lg-5">
            <div className="col-12 col-md-6 d-flex justify-content-start align-items-center">
              <div>
                <h3 className="nelphim mb-3 mt-3 mt-lg-0 sub-heading">
                  Timeless Moments
                </h3>
                <p className="mb-4">
                  DevoBhava was founded in 2021 by Shalini Khanna, a seasoned
                  event expert and Director of the ICE Group of Companies. As a
                  subsidiary of ICE Group—renowned for its global events and
                  prestigious clientele, including HCL, Pepsico, and
                  Bajaj—DevoBhava embodies a legacy of excellence with a fresh
                  perspective
                </p>
                <p>
                  With over 20 years of experience and more than 1,500 weddings
                  and events executed, we combine unmatched expertise with a
                  personalized approach to create events that are elegant,
                  seamless, and uniquely yours.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-end align-items-center">
              <img
                src="/public/aboutUs-section.jpg"
                className="img-fluid rounded-2"
                alt=""
                srcSet=""
              />
            </div>
          </div>
        </div>
        <div className="py-lg-5 my-5 conatiner-fluid container-xl d-flex align-items-center flex-column">
          <p className="text-center mb-3 mb-lg-4">
            At DevoBhava, we specialize in crafting weddings, private soirées,
            corporate gatherings, and social events that are unique,
            personalized, and unforgettable. Our expertise spans across event
            decor, planning, logistics, and seamless execution, ensuring every
            detail reflects perfection.
          </p>
          <ContactForm title={"Enquire now"} className={"cta-btn"} icon={"si:arrow-right-duotone"} />
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
