import React, { Fragment, useState, useEffect } from "react";
import Helmet from "react-helmet";
import "../DarkMode/DarkMode.css";

const themeType = {
	dark: "dark",
	light: "light",
};

const DarkMode = () => {
	const [mode, setMode] = useState(() => {
		if (typeof window !== "undefined") {
			const val = localStorage.getItem("theme");
			return val ? JSON.parse(val) : themeType.light;
		}
		return themeType.light;
	});

	useEffect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem("theme", JSON.stringify(mode));
		}
	}, [mode]);

	const toggleMode = () => {
		setMode(mode === themeType.light ? themeType.dark : themeType.light);
	};

	return (
		<Fragment>
			<Helmet>
				<body className={mode} />
			</Helmet>
			<div
				className="theme-mode"
				onClick={toggleMode}
				role="button"
				tabIndex="0"
				onKeyDown={toggleMode}
			>
				{mode === themeType.light ? (
					<i class="far fa-lightbulb fa-2x"></i>
				) : (
					<i class="fas fa-lightbulb fa-2x"></i>
				)}
			</div>
		</Fragment>
	);
};

export default DarkMode;
