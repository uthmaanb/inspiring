import { useLocation, Link } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    
	return (
		<footer className="footerContainer">
			<div className="footerItem">Inspiring Scents</div>
			<div className="footerItem">Hashir Sadaf</div>
            {location.pathname === "/" ? <Link to="/contact" className="footerItem footerContact" >Contact Us</Link> : <Link to="/" className="footerItem footerContact">Home</Link>}
            
		</footer>
	);
};

export default Footer;

