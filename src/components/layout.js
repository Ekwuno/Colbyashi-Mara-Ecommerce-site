import React from "react";
import Header from "./header";

const Layout = ({ children }) => {
	return (
		<main>
			<Header />
			<div>{children}</div>
		</main>
	);
};

export default Layout;
