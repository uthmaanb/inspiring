import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Reviews from "./Reviews";

const Content = ({ homeRef, aboutRef, fragRef, femaleRef, maleRef, oudRef, reviewRef }) => {

	const handleScroll = (ref) => {
		window.scrollTo({
			top: ref.offsetTop,
		});
	};

	const female = [
		"armani si",
		"aqua di gio",
		"beyonce heat",
		"britney spears fantasy",
		"britney spears curious",
		"burberry her",
		"bulgari amethyste",
		"chanel chance",
		"chanel no. 5",
		"ch the good girl",
		"clinique happy",
		"coco mademoiselle",
		"cool water",
		"coppelia",
		"d&g light blue",
		"d&g the one",
		"diesel loverdose tatoo",
		"dkny green",
		"dkny pure",
		"dkny fresh blossom",
		"dunhill desire",
		"elizabeth arden untold",
		"elie saab",
		"elie saab girl of now",
		"gucci bloom",
		"gucci guilty",
		"gucci rush",
		"guess woman",
		"hypnotic poison",
		"j.lo live",
		"jimmy choo",
		"katy perry killer queen",
		"kim kardashian",
		"lacoste touch of pink",
		"la vie est belle",
		"little black dress",
		"marc jacobs daisy",
		"michael kors rose gold",
		"miss dior cherie",
		"miss dior rose'n roses",
		"opium black",
		"paco lady million",
		"panache",
		"paris hilton heiress",
		"pink friday",
		"provocative",
		"red door",
		"stella mccartney",
		"sunflower",
		"taylor swift for her",
		"tommy girl",
		"versace bright crystal",
		"victoria secret bombshell",
		"wanted azzaro",
		"white diamonds",
		"ysl libre intense ",
	];

	const male = [
		"212 vip",
		"aqua di gio",
		"azzaro legend",
		"boss orange",
		"bulgari man in black",
		"ck-one",
		"clinique happy",
		"cool water",
		"d&g light blue",
		"david beckham",
		"dior sauvage",
		"dunhill blue",
		"dunhill desire",
		"fahrenheit",
		"ferrari black",
		"gucci guilty",
		"gucci rush",
		"hugo boss",
		"issey miyake",
		"jean paul gaultier",
		"jimmy choo",
		"lacoste blue",
		"lacoste white",
		"mr burberry",
		"old spice",
		"paco one million",
		"paco invictus",
		"polo",
		"tom ford noir",
		"versace pour homme",
		"wanted azzaro",
	];

	const oud = [
		"black safran",
		"gucci oud",
		"mkh emarat",
		"musk al whazir",
		"oud blond",
		"oud de milan",
		"oud malaki",
		"sadaf",
		"shaik",
		"sultan",
		"suzerain",
		"white musk",
		"white oud",
	];
	return (
		<div>
			<Navbar homeRef={ homeRef } aboutRef={ aboutRef } fragRef={ fragRef } femaleRef={femaleRef} maleRef={maleRef} oudRef={oudRef} reviewRef={reviewRef} />

			<section id="landing" className="landing" ref={homeRef}>
				<h2 className="landing-title">Welcome to Inspiring Scents</h2>

				<Link
					className="nav-link landing-text"
					onClick={() => {
						handleScroll(aboutRef.current);
					}}
					to="/#about"
				>
					<i className="fas fa-2x fa-arrow-down tm-down-arrow"> Get Started</i>
				</Link>
			</section>

			<section id="about" className="about" ref={aboutRef}>
				<h1 className="aboutUs">About Us</h1>
				<p className="aboutUs-content">
					We create oil-based perfumes based on widely known and popular brands.
				</p>
			</section>

			<section id="fragrances" className="fragrances" ref={fragRef}>
				<div id="female" className="female fragLists" ref={femaleRef}>
					<h1 className="fragranceHeading">Female fragrances</h1>
					<ul className="fragList">
						{female.map((item, index) => {
							return (
								<li key={index}>
									<p className="individualFragrance">
										<span>like </span>
										{item}
									</p>
								</li>
							);
						})}
					</ul>
				</div>

				<div id="male" className="male fragLists" ref={maleRef}>
					<h1 className="fragranceHeading">Male fragrances</h1>
					<ul className="fragList">
						{male.map((item, index) => {
							return (
								<li key={index}>
									<p className="individualFragrance">
										<span>like </span>
										{item}
									</p>
								</li>
							);
						})}
					</ul>
				</div>

				<div id="oud" className="oud fragLists" ref={oudRef}>
					<h1 className="fragranceHeading">Oud fragrances</h1>
					<ul className="fragList">
						{oud.map((item, index) => {
							return (
								<li key={index}>
									<p className="individualFragrance">
										<span>like </span>
										{item}
									</p>
								</li>
							);
						})}
					</ul>
				</div>
			</section>

			<Reviews reviewRef={reviewRef} />
		</div>
	);
};

export default Content;
