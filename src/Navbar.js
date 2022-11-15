import { useState } from "react";

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);

	const handleClick = (event) => {
		setIsActive((current) => !current);
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
								<a className="nav-link" href="#landing">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#about">
									About
								</a>
							</li>
							<ul className="dropdown nav-item">
								<li className="nav-item"><a className="nav-link" href="#fragrances">
										Fragrances
									</a></li>
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
								<a className="nav-link" href="#contact">
									Contact Us
								</a>
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
