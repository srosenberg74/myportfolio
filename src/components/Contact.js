import "../App.css";

export default function Contact() {
  const sendContactForm = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    let mailto = `mailto:samrose4@gmail.com`;
    mailto += `?subject=${subject}`;
    mailto += `&body=${message}`;

    window.open(mailto);
  };

  return (
    <div className="contact">
      <h1 className="contact">Contact Me</h1>
      <p>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your Name*
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Subject*
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Your Message*
            </label>
            <textarea
              name="message"
              id="message"
              className="form-control"
              rows="3"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(event) => sendContactForm(event)}
          >
            Submit
          </button>
        </form>
      </p>
    </div>
  );
}
