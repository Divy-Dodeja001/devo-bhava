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
          className="container-fluid container py-lg-5"
        >
          <h1 className="sub-heading nelphim text-center">About Us</h1>
        </div>
        <div id="hero-section-about-us" className="position-relative">
          <div className="hero-banner-text w-100">
            <div className="">
              <h3 className="nelphim sub-heading">
                Where Every Moment Becomes a Memory
              </h3>
              <p>
                Discover the story behind DevoBhava, a trusted name in event
                management, transforming occasions into unforgettable
                experiences.
              </p>
            </div>
          </div>
          <img src="/public/hero-banner-about-us.jpg" className="w-100"></img>
        </div>
        <div
          id="our-story-about-us"
          className="container-fluid container-xl py-lg-5 my-lg-5"
        >
          <div className="row p-0">
            <div className="col-12 col-md-6 our-story-text">
              <div>
                <h3 className="mb-4 pb-4 nelphim sub-heading">Our Story</h3>
                <p className="mb-3">
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
            <div className="col-12 col-md-6 ps-lg-4 d-flex our-story-image">
              <img src="/public/our-story.jpg" className="w-75"></img>
            </div>
          </div>
        </div>
        <div
          id="founder"
          className="container-fluid container-xl py-lg-5 my-lg-5"
        >
          <div
            className="line mx-auto"
          ></div>
          <h3 className="nelphim sub-heading text-center mt-3 mb-4 pb-4">
            Meet the Founder
          </h3>
          <div className="mb-5 d-flex justify-content-center">
            <img src="/public/founder.png" className="w-25"></img>
          </div>
          <div>
            <p className="text-center">
              With over 13 years of experience and a portfolio of 1,500+
              weddings, Shalini Khanna has established herself as a pioneer in
              event management. As the founder of Devo Bhava and Director of ICE
              Group, she brings her expertise and passion to every project,
              ensuring that every event reflects elegance, precision, and
              creativity.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
