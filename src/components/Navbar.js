import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ homeRef, aboutRef, fragRef, femaleRef, maleRef, oudRef, reviewRef  }) => {
	const [isActive, setIsActive] = useState(false);

	const handleClick = (event) => {
		setIsActive((current) => !current);
	};

	const handleScroll = (ref) => {
		window.scrollTo({
			top: ref.offsetTop,
		});
	};

	return (
		<div className="NavContainer">
			<nav className="navbar" id="tmNav">
				<div className="containerHeader">
					<div className="tm-next">
						<a href="#home" className="navbar-brand">
							Inspiring Scents
						</a>
					</div>
					<div className="nav">
						<button className="burger" onClick={handleClick}>
							<i className="fa-solid fa-bars"></i>
						</button>
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link
									className="nav-link"
									onClick={() => {
										handleScroll(homeRef.current);
									}}
									to="/#landing"
								>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link"
									onClick={() => {
										handleScroll(aboutRef.current);
									}}
									to="/#about"
								>
									About
								</Link>
							</li>
							<ul className="dropdown nav-item">
								<li className="nav-item">
									<Link
										className="nav-link"
										onClick={() => {
											handleScroll(fragRef.current);
										}}
										to="/#fragrances"
									>
										Fragrances
									</Link>
								</li>
								<div className="dropdown-content">
									<Link
										className="nav-link"
										onClick={() => {
											handleScroll(femaleRef.current);
										}}
										to="/#female"
									>
										Female Fragrances
									</Link>
									<Link
										className="nav-link"
										onClick={() => {
											handleScroll(maleRef.current);
										}}
										to="/#male"
									>
										Male Fragrances
									</Link>
									<Link
										className="nav-link"
										onClick={() => {
											handleScroll(oudRef.current);
										}}
										to="/#oud"
									>
										Oud Fragrances
									</Link>
								</div>
							</ul>
							<li className="nav-item">
								<Link
									className="nav-link"
									onClick={() => {
										handleScroll(reviewRef.current);
									}}
									to="/#review"
								>
									Reviews
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contact">
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className={isActive ? "" : "hide"}>
				<nav onClick={handleClick}>
					<ul className="navbar-nav2">
						<li className="nav-item">
							<Link
								className="nav-link"
								onClick={() => {
									handleScroll(homeRef.current);
								}}
								to="/#landing"
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								onClick={() => {
									handleScroll(aboutRef.current);
								}}
								to="/#about"
							>
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								onClick={() => {
									handleScroll(femaleRef.current);
								}}
								to="/#female"
							>
								Female Fragrances
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								onClick={() => {
									handleScroll(maleRef.current);
								}}
								to="/#male"
							>
								Male Fragrances
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								onClick={() => {
									handleScroll(oudRef.current);
								}}
								to="/#oud"
							>
								Oud Fragrances
							</Link>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#quickservice">
								Quick Service
							</a>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/contact">
								Contact Us
							</Link>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#contact">
								Satisfied Customers
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
