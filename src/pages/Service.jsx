import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  gallery2,
  soireesOfferings,
  weddingOfferings,
  weddingServices,
} from "../data/data";
import "../css/service.css";
import Gallery1 from "../components/Gallery1";
import Gallery2 from "../components/Gallery2";
import ContactForm from "../components/contactForm";

const Service = () => {
  return (
    <>
      <Navbar />
      {/* main section service page */}
      <div id="service-main-section">
        <div id="hero-section-service" className="position-relative">
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
              <h1 className="nelphim hero-heading">
                Every Detail, Thoughtfully Curated
              </h1>
              <p>
                From intimate gatherings to grand celebrations, Devo Bhava
                offers end-to-end event solutions designed to make your special
                moments truly unforgettable. What We Offer.
              </p>
            </div>
          </div>
          <picture>
            <source
              media="(max-width:650px)"
              srcSet="/public/mobile/hero-services-mobile.jpg"
            />
            <source
              media="(min-width:651px)"
              srcSet="/public/hero-services.jpg"
            />
            <img
              src="/public/hero-services.jpg"
              className="w-100 px-3 px-lg-0"
              alt=""
              srcSet=""
            />
          </picture>
        </div>
        <div className="position-relative">
          <div
            className="position-absolute d-none d-md-block"
            style={{ top: "10%", left: "0%", zIndex: -1 }}
          >
            <img src="/public/small-leftVector.svg" className="img-fluid"></img>
          </div>
          <div
            className="position-absolute d-lg-none"
            style={{ bottom: "-10%", left: "-10%", zIndex: -1 }}
          >
            <img src="/public/small-leftVector.svg" className="img-fluid"></img>
          </div>
          <div
            className="position-absolute d-none d-md-block"
            style={{ bottom: "-10%", right: "0%", zIndex: -1 }}
          >
            <img
              src="/public/small-rightVector.svg"
              className="img-fluid"
            ></img>
          </div>
          <div
            id="weddings-section"
            className="container container-xl my-lg-5 py-5"
          >
            <div className="line-primary mx-auto mb-3"></div>
            <div className="pb-5 mb-lg-4">
              <h3 className="nelphim mb-3 sub-heading text-center">Weddings</h3>
              <p className="mb-lg-4 pb-lg-3 text-center">
                Indian Weddings, Redefined.
              </p>
              <p className="text-center mb-0">
                Indian weddings are a celebration of love, tradition, and
                community. At Devo Bhava, we ensure that every moment is curated
                with care and elegance. From pre-wedding festivities to the
                grand reception, we offer a full range of services to bring your
                dream wedding to life.
              </p>
            </div>
            <div className="pb-5 mb-lg-4">
              <h5 className="mb-4 text-center">Key Offerings for Weddings</h5>
              <div className="d-flex justify-content-center align-items-center flex-wrap wedding-offerings">
                {weddingOfferings.map((offering, index) => {
                  return (
                    <div
                      key={index}
                      className="primary-bg text-light p-4 text-center wedding-offering rounded-2"
                    >
                      <h4 className="nelphim mb-3 mb-lg-4">{offering.title}</h4>
                      <div className="line-grey mb-lg-5 mb-4 mx-auto"></div>
                      <div className="mb-4">
                        <p>{offering.text}</p>
                      </div>
                      <div>
                        <img
                          className="rounded-3 img-fluid"
                          src={offering.image}
                        ></img>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div id="wedding-services" className="pb-5 mb-lg-4">
              <h3 className="nelphim mb-lg-5 mb-3 sub-heading text-center">
                360-Degree Wedding Services
              </h3>
              <div className="row p-0 p-3">
                {weddingServices.map((weddingService, index) => {
                  return (
                    <div
                      key={index}
                      className="col-6 p-0 p-lg-5 p-3 d-flex justify-content-center align-items-start text-center border"
                    >
                      <div>
                        <img
                          src={weddingService.image}
                          className="mb-4 wedding-service-image"
                        ></img>
                        <h5 className="primary-color fw-bold mb-3 mb-lg-4">
                          {weddingService.title}
                        </h5>
                        <p className="mb-0">{weddingService.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="">
              <h3 className="nelphim mb-lg-5 mb-4 sub-heading text-center">
                Check our latest gallery
              </h3>
              <div className="position-relative pb-5 gallery-2-height">
                <div className="row px-3">
                  <div className="col-6 p-0 p-1 d-flex justify-content-end">
                    <Gallery2
                      src={gallery2[0].src}
                      direction={gallery2[0].direction}
                    />
                  </div>
                  <div className="col-6 p-0 p-1 d-flex justify-content-end">
                    <Gallery2
                      src={gallery2[1].src}
                      direction={gallery2[1].direction}
                    />
                  </div>
                </div>
                <div
                  className="position-absolute px-3"
                  style={{ zIndex: 2, bottom: "35%" }}
                >
                  <Gallery2
                    src={gallery2[2].src}
                    direction={gallery2[2].direction}
                  />
                </div>
                <div
                  className="row px-3 position-absolute"
                  style={{ zIndex: 3, bottom: "0%" }}
                >
                  <div className="col-6 p-0 p-1 pe-lg-3 d-flex justify-content-end">
                    <Gallery2
                      src={gallery2[3].src}
                      direction={gallery2[3].direction}
                    />
                  </div>
                  <div className="col-6 p-0 p-1 ps-lg-3 d-flex justify-content-end">
                    <Gallery2
                      src={gallery2[4].src}
                      direction={gallery2[4].direction}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-relative">
          <div
            className="position-absolute d-none d-md-block"
            style={{ top: "60%", left: "0%", zIndex: -1 }}
          >
            <img src="/public/small-leftVector.svg" className="img-fluid"></img>
          </div>
          <div
            id="private-events-section"
            className="container-fluid container-xl my-lg-5 py-5"
          >
            <div className="line-primary mx-auto mb-4"></div>
            <div className="pb-5 mb-lg-4">
              <h3 className="nelphim mb-3 sub-heading text-center">
                Private Soirees and Events
              </h3>
              <p className="mb-4 pb-lg-3 text-center">
                Celebrate Life’s Milestones with Grace and Style.
              </p>
              <p className="text-center mb-0">
                From intimate gatherings to grand celebrations, DevoBhava brings
                elegance, creativity, and a touch of perfection to every event.
                Backed by the experience of the ICE Group, with over two decades
                of expertise and a prestigious clientele including HCL, Pepsico,
                and Bajaj, we ensure your event is seamlessly executed and truly
                unforgettable.
              </p>
            </div>
            <div className="pb-5 mb-4">
              <h5 className="mb-4 pb-lg-4 text-center">
                Key Offerings for Private Soirees & Events
              </h5>
              <div className="container-fluid container-xl">
                {soireesOfferings.map((offering, index) => (
                  <div
                    key={index}
                    className="row p-3 p-lg-4 primary-bg text-light mb-4 rounded-2 row-gap-3"
                  >
                    <div className="col-12 col-md-8 p-0 d-flex justify-content-center align-items-center">
                      <div>
                        <h4 className="nelphim mb-3 mb-lg-4 text-center">
                          {offering.title}
                        </h4>
                        <div className="line-grey mb-4 mb-lg-5 mx-auto"></div>
                        <div className="mb-4 text-center">
                          <p>{offering.text}</p>
                        </div>
                        <div className="d-flex align-items-start flex-wrap ps-lg-5 key-points">
                          {offering.points.map((point, index) => (
                            <li
                              key={index}
                              className="soiree-offering-key-points mb-2"
                            >
                              {point}
                            </li>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 p-0 d-flex justify-content-center align-items-center">
                      <img
                        src={offering.image}
                        className="img-fluid rounded-3"
                        alt="Offering"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              <h3 className="nelphim mb-lg-5 mb-4 sub-heading text-center">
                Check our latest gallery
              </h3>
              <Gallery1 />
            </div>
          </div>
        </div>

        <div
          id="breaker-section-service"
          className="position-relative my-lg-5 py-5"
        >
          <div className="hero-banner-text breaker-banner-text w-100">
            <div className="">
              <h3 className="nelphim sub-heading">
                Private Soirees and Events
              </h3>
              <p className="mb-3 mb-lg-4">
                Share your details with us, and we’ll help bring your vision to
                life with elegance and perfection.
              </p>
              <ContactForm title={"Enquire now"} className={"cta-btn"} icon={"si:arrow-right-duotone"} />
              </div>
          </div>
          <picture>
            <source
              media="(max-width:650px)"
              srcSet="/public/mobile/breaker-services-mobile.jpg"
            />
            <source
              media="(min-width:651px)"
              srcSet="/public/breaker-services.jpg"
            />
            <img
              src="/public/breaker-services.jpg"
              className="w-100"
              alt=""
              srcSet=""
            />
          </picture>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
