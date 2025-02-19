import axios from "axios";
import "../css/contactForm.css";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [interest, setInterest] = useState("");
  const interestedTabs = [
    "Wedding Decor",
    "Wedding Planning",
    "Venue Selection",
    "Corporate Events",
    "Others",
  ];
  const [error, setError] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const handleSubmit = async (e) => {
    setIsSubmit(true);
    e.preventDefault();
    if (!interest) {
      setError("Please select this field.");
      return;
    }
    try {
      const res = await axios.post(
        "http://localhost:5000/api/enquiry/send-enquiry",
        { name, email, interest, message }
      );
      if (res) {
        setResponseMessage(res.data.message);
        setName("");
        setEmail("");
        setMessage("");
        setError("");
        setInterest("");
        setIsSubmit(false);
      }
    } catch (error) {
      setIsSubmit(false);
      setResponseMessage(
        "Error sending enquiry. Please try again.",
        error.message
      );
    }
    setError("");
  };
  return (
    <div id="contact-form-modal">
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
              {!responseMessage && (
                <h1
                  className="modal-title nelphim sub-heading"
                  id="staticBackdropLabel"
                >
                  Hey! Tell us <br></br>all the things
                </h1>
              )}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setResponseMessage("")}
              ></button>
            </div>
            <div className="modal-body">
              {!responseMessage && (
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
                            interest === tab ? "selected-interested-tab" : ""
                          }`}
                          onClick={() => setInterest(tab)}
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
                      value={message}
                      rows="4"
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="primary-button w-100 rounded-2"
                  >
                    {!isSubmit ? "Enquire Now" : "Submitting..."}
                  </button>
                </form>
              )}
              {responseMessage && (
                <div style={{ color: "green", marginTop: "5px" }}>
                  <h4 className="text-center">{responseMessage}</h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
