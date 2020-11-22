import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import DarkMode from "./components/DarkMode/DarkMode";

function App() {
	return (
		<>
			<Nav />
			<Main />
			<Footer />
		</>
	);
}

export default App;
