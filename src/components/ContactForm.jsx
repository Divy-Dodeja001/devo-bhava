import { Icon } from "@iconify/react";
import "../css/contactForm.css";
import { useState } from "react";

const ContactForm = ({ className, style, title, icon }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [interested, setIntersted] = useState("");
  const interestedTabs = [
    "Wedding Decor",
    "Wedding Planning",
    "Venue Selection",
    "Corporate Events",
    "Others",
  ];
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!interested) {
      setError("Please select this field.");
      return;
    }
    setError("");
  };
  return (
    <div id="contact-form-modal">
      <button
        type="button"
        className={`text-decoration-none primary-button rounded-1 d-flex align-items-center gap-1 ${className}`}
        style={{ width: "fit-content", ...style }}
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        {title}
        {icon && (
          <Icon icon={icon} width="30" height="30" style={{ color: "white" }} />
        )}
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-0 p-3">
            <div className="modal-header">
              <h1
                className="modal-title nelphim sub-heading"
                id="staticBackdropLabel"
              >
                Hey! Tell us <br></br>all the things
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="w-100" onSubmit={handleSubmit}>
                <div className="d-flex mb-4" style={{ gap: "0.7em" }}>
                  <div className="w-50">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                  </div>
                  <div className="w-50">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      required
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">
                    I&apos;m interested in...
                  </label>
                  <div
                    className="d-flex flex-wrap align-items-center"
                    style={{ gap: "0.5em" }}
                  >
                    {interestedTabs.map((tab, index) => (
                      <div
                        key={index}
                        className={`border rounded-2 p-2 ${
                          interested === tab ? "selected-interested-tab" : ""
                        }`}
                        onClick={() => setIntersted(tab)}
                        style={{ cursor: "pointer" }}
                      >
                        {tab}
                      </div>
                    ))}
                  </div>
                  {error && (
                    <div style={{ color: "red", marginTop: "5px" }}>
                      {error}
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label className="form-label">Tell us more</label>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Something about your great idea..."
                    value={query}
                    rows="4"
                    onChange={(e) => setQuery(e.target.value)}
                  ></textarea>
                </div>
                <button className="primary-button w-100 rounded-2">
                  Enquire Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
