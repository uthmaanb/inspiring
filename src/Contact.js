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
		</div>
	);
};

export default Contact;
