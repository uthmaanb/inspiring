import { useRef } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	const homeRef = useRef(null);	  
	const aboutRef = useRef(null);	  
	const fragRef = useRef(null);	  
	const femaleRef = useRef(null);	  
	const maleRef = useRef(null);	  
	const oudRef = useRef(null);	  

	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Content homeRef={homeRef} aboutRef={aboutRef} fragRef={fragRef} femaleRef={femaleRef} maleRef={maleRef} oudRef={oudRef} />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={ <div><h2>404 Page not found</h2></div> } />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
