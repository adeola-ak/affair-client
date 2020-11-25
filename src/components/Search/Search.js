import React, { useState, useEffect } from "react";

const Search = ({
	closet,
	setCloset,
	handleInputSubmit,
	searchInput,
	inputTextHandler,
}) => {
	console.log(closet);

	const BarStyling = {
		width: "20rem",
		background: "#F2F1F9",
		border: "none",
		padding: "0.5rem",
	};

	return (
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
	);
};

export default Search;
