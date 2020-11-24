/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";

const Search = () => {
	return (
		<div style={{ width: 700 }}>
			<TextField
				label="Search Your Closet"
				margin="normal"
				variant="outlined"
			/>
		</div>
	);
};

export default Search;
