import React, { useContext } from "react";
import "../../styles/home.css";

// Components
import HeroBanner from "../component/Hero-Banner/HeroBanner.jsx";
import BrowserData from "../component/Browser-Data/BrowserData.jsx";

// images
import background from "../../assets/main-bg.jpg"

export const Home = () => {


	return (
		<div className="background" style={{ backgroundImage: `url(${background})` }}>
			{/* Components */}
			<HeroBanner />
			<BrowserData />
		</div>
	)
}
