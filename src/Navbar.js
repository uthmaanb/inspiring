import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ homeRef, aboutRef, fragRef }) => {
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
								<Link className="nav-link" onClick={() => {handleScroll(homeRef);}} to="/#landing">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" onClick={() => {handleScroll(aboutRef);}} to="/#about">
									About
								</Link>
							</li>
							<ul className="dropdown nav-item">
								<li className="nav-item">
									<Link className="nav-link" onClick={() => {handleScroll(fragRef);}} to="/#fragrances">
										Fragrances
									</Link>
								</li>
								<div className="dropdown-content">
									<a className="nav-link" href="#fragrances">
										Female Fragrances
									</a>
									<a className="nav-link" href="#malefragrances">
										Male Fragrances
									</a>
									<a className="nav-link" href="#oudfragrances">
										Oud Fragrances
									</a>
								</div>
							</ul>
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
				<nav>
					<ul className="navbar-nav2">
						<li className="nav-item">
							<a className="nav-link" href="#home">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#aboutus">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#malefragrances">
								Male Fragrances
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#oudfragrances">
								Oud Fragrances
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#femalefragrances">
								Female Fragrances
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#quickservice">
								Quick Service
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="contact.html">
								Contact Us
							</a>
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
