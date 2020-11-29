import React, { Fragment, useState, useEffect } from "react";
import Helmet from "react-helmet";
import "../DarkMode/DarkMode.css";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { yellow } from "@material-ui/core/colors";

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
					<PowerSettingsNewIcon
						fontSize="large"
						style={{ color: yellow[500] }}
					/>
				) : (
					<>
						<PowerSettingsNewIcon
							fontSize="large"
							color="primary"
						/>
					</>
				)}
			</div>
		</Fragment>
	);
};

export default DarkMode;
