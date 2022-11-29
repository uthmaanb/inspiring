import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
	const [value, setValue] = useState("");

	const handleChange = (event) => {
		const result = event.target.value.replace(/\D/g, "");

		setValue(result);
	};

	return (
		<div className="formSection">
			<div className="backContainer">
			<Link className="back" to="/">Back to homepage</Link>
			</div>

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
							value={value}
							onChange={handleChange}
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

				<div className="contactMethods">
					<div className="contact-item">
						<a
							rel="nofollow"
							href="https://wa.me/27613289168"
							className="item-link"
						>
							<i className="far fa-2x fa-comment mr-4"></i>
							<span className="mb-1">Chat on Whatsapp</span>
						</a>
					</div>

					<div className="contact-item">
						<a
							rel="nofollow"
							href="mailto:inspiringscentssouthafrica@gmail.com"
							className="item-link"
						>
							<i className="far fa-2x fa-envelope mr-4"></i>
							<span className="mb-1">inspiringscentssouthafrica@gmail.com</span>
						</a>{" "}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
