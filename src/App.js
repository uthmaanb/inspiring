import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" element={<Content />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
