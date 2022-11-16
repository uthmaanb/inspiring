const Contact = () => {
  return (
    <div className="formContainer">
      <form action="https://formspree.io/f/mgedjrpd" method="POST">
        <div className="flexForm">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name*"
            className="tm-input"
            required
          />
          <input
            id="number"
            name="number"
            type="text"
            placeholder="Phone Number"
            onKeyPress="return restrictAlphabets(event)"
            className="tm-input"
          />
        </div>
        <div className="flexForm2">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email*"
            className="tm-input"
            required
          />
          <textarea
            id="message"
            name="message"
            rows="8"
            placeholder="Message*"
            className="tm-input"
            required
          ></textarea>
        </div>
        <button type="submit" className="submitButton">
          Submit
        </button>
      </form>

      <div className="contact-item">
        <a
          rel="nofollow"
          href="https://wa.me/27613289168"
          className="item-link"
        >
          <i className="far fa-2x fa-comment mr-4"></i>
          <span className="mb-0">Chat on Whatsapp</span>
        </a>
      </div>

      <div className="contact-item">
        <a
          rel="nofollow"
          href="mailto:inspiringscentssouthafrica@gmail.com"
          className="item-link"
        >
          <i className="far fa-2x fa-envelope mr-4"></i>
          <span className="mb-0">inspiringscentssouthafrica@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
