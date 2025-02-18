import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import "../css/home.css";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { testimonials } from "../data/data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Icon } from "@iconify/react";
import CountUp from "react-countup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Gallery1 from "../components/Gallery1";

gsap.registerPlugin(ScrollTrigger);

// import { Icon } from "@iconify/react";

const Home = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [counterState, setCounterState] = useState(false);
  const triggerCounterRef = useRef(null);
  const triggerRef = useRef(null);
  useEffect(() => {
    const trigger = triggerCounterRef.current;

    triggerRef.current = ScrollTrigger.create({
      trigger: trigger,
      start: "top 95%",
      onEnter: () => setCounterState(true),
      onLeaveBack: () => setCounterState(false),
    });

    return () => {
      if (triggerRef.current) {
        triggerRef.current.kill();
      }
    };
  }, []);
  return (
    <>
      <Navbar />
      {/* main-section */}
      <div className="" id="home-page-main-section">
        {/* hero-banner */}
        <div id="hero-section" className=" position-relative">
          <div className="container-fluid container-xl p-0 px-3 px-lg-0">
            <div className="hero-section-home row">
              <div className="col-12 col-md-6 pb-lg-5 d-flex justify-content-center align-items-center">
                <div>
                  <h1 className="nelphim mb-3 hero-heading">
                    Turning Moments Into Memories.
                  </h1>
                  <h5 className="pb-4">
                    Crafting bespoke events that combine elegance,
                    sophistication, and meticulous planning.
                  </h5>
                  <Button
                    link={"#contact-us-section"}
                    title={"Enquire now"}
                    icon={"si:arrow-right-duotone"}
                    className={"cta-btn"}
                  ></Button>
                </div>
              </div>
              <div className="col-12 col-md-6 pb-lg-5 d-flex justify-content-center align-items-center">
                <img
                  src="/public/heroImage.jpg"
                  className="img-fluid rounded-2"
                ></img>
              </div>
            </div>
          </div>
          <div
            className="position-absolute"
            style={{ top: "0%", right: "0%", zIndex: -1 }}
          >
            <img
              src="/public/hero-home-top-vector.svg"
              className="img-fluid"
            ></img>
          </div>
          <div
            className="position-absolute d-none d-md-block"
            style={{ bottom: "-30%", left: "0%", zIndex: -1 }}
          >
            <img
              src="/public/hero-home-bottom-vector.svg"
              className="img-fluid w-75"
            ></img>
          </div>
        </div>
        {/* stats */}
        <div id="stats-section" className="stats primary-color">
          <div className="container py-lg-4" ref={triggerCounterRef}>
            <div className="row p-0 px-5 py-lg-2">
              <div className="col-6 col-md-3 d-flex justify-content-center align-items-start p-0">
                <div className="text-center p-4 p-lg-0">
                  <p className="mb-0 nelphim num">
                    {counterState && (
                      <CountUp start={0} end={20} duration={2}></CountUp>
                    )}
                    +
                  </p>
                  <p className="text-uppercase mb-0 text">
                    years of<br></br>experience
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-3 d-flex justify-content-center align-items-start p-0">
                <div className="text-center p-4 p-lg-0">
                  <p className="mb-0 nelphim num">
                    {counterState && (
                      <CountUp start={0} end={1530} duration={2}></CountUp>
                    )}
                    +
                  </p>
                  <p className="text-uppercase mb-0 text">weddings</p>
                </div>
              </div>
              <div className="col-6 col-md-3 d-flex justify-content-center align-items-start p-0">
                <div className="text-center p-4 p-lg-0">
                  <p className="mb-0 nelphim num">
                    {counterState && (
                      <CountUp start={0} end={150} duration={2}></CountUp>
                    )}
                    +
                  </p>
                  <p className="text-uppercase mb-0 text">
                    corporate<br></br>events
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-3 d-flex justify-content-center align-items-start p-0">
                <div className="text-center p-4 p-lg-0">
                  <p className="mb-0 nelphim num">
                    {counterState && (
                      <CountUp start={0} end={70} duration={2}></CountUp>
                    )}
                    +
                  </p>
                  <p className="text-uppercase mb-0 text">
                    social<br></br>events
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about us */}
        <div
          id="about-us-section"
          className="container-fluid container-xl py-lg-5 py-5 my-lg-5 px-3 px-lg-0"
        >
          <div className="row py-lg-5">
            <div className="col-12 col-md-6 d-flex justify-content-start align-items-center">
              <div>
                <div className="d-lg-none line-primary mx-auto"></div>
                <h3 className="nelphim mb-3 mt-3 mt-lg-0 sub-heading">
                  About Us
                </h3>
                <p className="mb-4">
                  DevoBhava was founded in 2021 by Shalini Khanna, a seasoned
                  event expert and Director of the ICE Group of Companies. As a
                  subsidiary of ICE Group—renowned for its global events and
                  prestigious clientele, including HCL, Pepsico, and
                  Bajaj—DevoBhava embodies a legacy of excellence with a fresh
                  perspective. With over 20 years of experience and more than
                  1,500 weddings and events executed, we combine unmatched
                  expertise with a personalized approach to create events that
                  are elegant, seamless, and uniquely yours.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-end align-items-center">
            <picture>
                <source
                  media="(max-width:650px)"
                  srcSet="/public/mobile/aboutUs-section-mobile.jpg"
                />
                <source
                  media="(min-width:651px)"
                  srcSet="/public/aboutUs-section.jpg"
                />
                <img
                  src="/public/aboutUs-section.jpg"
                  className="img-fluid rounded-2"
                  alt=""
                  srcSet=""
                />
              </picture>
            </div>
          </div>
        </div>
        {/* services */}
        <div
          id="services-section"
          className="container-fluid container-xl py-lg-5 py-4 mt-lg-5 mb-lg-2 px-3 px-lg-0"
        >
          <div className="d-lg-none line-primary mx-auto"></div>
          <h3 className="nelphim sub-heading mt-3 mt-lg-0 mb-4 pb-lg-4 text-center">
            Creating Timeless Celebrations
          </h3>
          <div className="d-flex justify-content-center align-items-center gap-lg-4 gap-2 services">
            <div className="">
              <picture>
                <source
                  media="(max-width:650px)"
                  srcSet="/public/mobile/planning-mobile.jpg"
                />
                <source
                  media="(min-width:651px)"
                  srcSet="/public/planning.jpg"
                />
                <img
                  src="/public/planning.jpg"
                  className="w-100 mb-2 mb-lg-4"
                  alt=""
                  srcSet=""
                />
              </picture>
              <p>Wedding Planning</p>
            </div>
            <div className="">
              <picture>
                <source media="(max-width:650px)" srcSet="/public/mobile/decor-mobile.jpg" />
                <source media="(min-width:651px)" srcSet="/public/decor.jpg" />
                <img
                  src="/public/decor.jpg"
                  className="w-100 mb-2 mb-lg-4"
                  alt=""
                  srcSet=""
                />
              </picture>
              <p>Wedding Decor</p>
            </div>
            <div className="">
              <picture>
                <source media="(max-width:650px)" srcSet="/public/mobile/venue-mobile.jpg" />
                <source media="(min-width:651px)" srcSet="/public/venue.jpg" />
                <img
                  src="/public/venue.jpg"
                  className="w-100 mb-2 mb-lg-4"
                  alt=""
                  srcSet=""
                />
              </picture>
              <p>Venue Selection</p>
            </div>
            <div className="">
              <picture>
                <source
                  media="(max-width:650px)"
                  srcSet="/public/mobile/corporate-mobile.jpg"
                />
                <source
                  media="(min-width:651px)"
                  srcSet="/public/corporate.jpg"
                />
                <img
                  src="/public/corporate.jpg"
                  className="w-100 mb-2 mb-lg-4"
                  alt=""
                  srcSet=""
                />
              </picture>
              <p>Corporate Events</p>
            </div>
          </div>
        </div>
        {/* breaker */}
        <div
          id="home-page-breaker"
          className="container-fluid container-xl pb-5 mb-3 mb-lg-0"
        >
          <p className="mb-4 pb-lg-4 text-center breaker-text">
            At DevoBhava, we specialize in crafting weddings, private soirées,
            corporate gatherings, and social events that are unique,
            personalized, and unforgettable. Our expertise spans across event
            decor, planning, logistics, and seamless execution, ensuring every
            detail reflects perfection.
          </p>
          <div className="d-flex justify-content-center">
            <Button
              link={"#contact-us-section"}
              title={"Enquire now"}
              icon={"si:arrow-right-duotone"}
              className={"cta-btn"}
            ></Button>
          </div>
        </div>
        {/* gallery */}
        <div className="position-relative pb-3 pb-lg-0">
          <div
            className="position-absolute"
            style={{ top: "-30%", left: "0%", zIndex: -1 }}
          >
            <img src="/public/small-leftVector.svg" className="img-fluid"></img>
          </div>
          <div
            className="position-absolute"
            style={{ bottom: "-20%", right: "0%", zIndex: -1 }}
          >
            <img
              src="/public/small-rightVector.svg"
              className="img-fluid"
            ></img>
          </div>
          <div
            id="gallery-home"
            className="container-fluid container-xl py-lg-5 my-lg-5"
          >
            <div className="d-lg-none line-primary mx-auto"></div>
            <h3 className="nelphim sub-heading mt-3 mt-lg-0 mb-4 text-center">
              Check our latest gallery
            </h3>
            <h5 className="pb-4 mb-lg-4 text-center">
              Team with all the tools they need to streamline your event
              planning process. Some top artists have gained global
            </h5>
            <Gallery1 />
          </div>
        </div>
        {/* testimonials */}
        <div
          id="testimonials-section"
          className="container-fluid container-xl pb-4 pt-5 py-lg-5 my-lg-5 px-3 px-lg-0"
        >
          <div className="d-lg-none line-primary mx-auto"></div>
          <h3 className="text-center pb-4 mb-lg-4 mt-3 mt-lg-0 sub-heading nelphim">
            What Our Clients Say
          </h3>
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            speed={800}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            navigation={{
              nextEl: ".next-testimonial-button",
              prevEl: ".prev-testimonial-button",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
          >
            {testimonials.map((testimonial, index) => {
              return (
                <SwiperSlide key={index} className="p-2 pb-lg-5 pb-4">
                  <div className="primary-bg p-4 rounded-2">
                    <h4 className="nelphim mb-4 pb-lg-4 text-light">
                      {testimonial.name}
                    </h4>
                    <div className="line-grey mb-3"></div>
                    <div className="testimonial-review-div">
                      <p className="mb-0 text-light">{testimonial.review}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <div className="d-flex justify-content-center navigation-arrow-div">
              <div
                className="p-1 rounded-5 prev-testimonial-button"
                style={{
                  width: "fit-content",
                  border: "1px solid #3e000d",
                  cursor: "pointer",
                }}
              >
                <Icon
                  icon="si:arrow-left-duotone"
                  width="30"
                  height="30"
                  style={{ color: "#3e000d" }}
                />
              </div>
              <div
                className="p-1 rounded-5 next-testimonial-button"
                style={{
                  width: "fit-content",
                  border: "1px solid #3e000d",
                  cursor: "pointer",
                }}
              >
                <Icon
                  icon="si:arrow-right-duotone"
                  width="30"
                  height="30"
                  style={{ color: "#3e000d" }}
                />
              </div>
            </div>
          </Swiper>
        </div>
        {/* contact us */}
        <div
          id="contact-us-section"
          className="container-fluid container-xl py-5 my-lg-5"
        >
          <div className="row p-0">
            <div className="col-12 col-md-6 d-flex justify-content-start align-items-center p-0 px-3 mb-4 mb-lg-0">
              <div className="w-100">
                <h4 className="mb-4 fw-semibold">
                  Let’s connect, create memories
                </h4>
                <form className="w-100">
                  <div className="d-flex mb-3" style={{ gap: "0.7em" }}>
                    <input
                      type="text"
                      required
                      className="form-control w-50"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    ></input>
                    <input
                      type="text"
                      required
                      className="form-control w-50"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    ></input>
                  </div>
                  <input
                    type="email"
                    required
                    className="form-control mb-3"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                  <input
                    type="tel"
                    required
                    className="form-control mb-3"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  ></input>
                  <textarea
                    type="text"
                    className="form-control mb-3"
                    placeholder="Your Query"
                    value={query}
                    rows="4"
                    onChange={(e) => setQuery(e.target.value)}
                  ></textarea>
                  <button className="primary-button w-100 rounded-2">
                    Enquire Now
                  </button>
                </form>
              </div>
            </div>
            <div className="col-12 col-md-6 d-none d-md-flex justify-content-end align-items-center ps-lg-5">
              <img
                src="/public/contactUs-section.jpg"
                className="img-fluid rounded-2"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
