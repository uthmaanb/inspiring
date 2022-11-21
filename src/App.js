import { useRef } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	const homeRef = useRef(null);	  
	const aboutRef = useRef(null);	  
	const fragRef = useRef(null);	  

	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Content homeRef={homeRef} aboutRef={aboutRef} fragRef={fragRef} />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
