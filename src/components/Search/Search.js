import React, { useState, useEffect } from "react";
import DarkMode from "../DarkMode/DarkMode";
import "./Search.css";

const Search = ({
	closet,
	setCloset,
	handleInputSubmit,
	searchInput,
	inputTextHandler,
	user,
}) => {
	console.log(closet);

	const BarStyling = {
		width: "20rem",
		background: "#F2F1F9",
		border: "none",
		padding: "0.5rem",
	};

	return (
		<>
			<div className="greeting">
				<h2>{user.username}'s Closet</h2>
				<DarkMode />
			</div>
			<form onSubmit={handleInputSubmit}>
				<input
					style={BarStyling}
					value={searchInput}
					its
					placeholder={"search your closet"}
					onChange={inputTextHandler}
				/>

				<input
					// style={BarStyling}
					className=""
					type="submit"
					value="Search"
				/>
			</form>
		</>
	);
};

export default Search;
