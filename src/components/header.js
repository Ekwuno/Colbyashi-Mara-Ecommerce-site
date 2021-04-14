import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import slugify from "@sindresorhus/slugify";

const Header = () => {
	const {
		allShopifyProduct: { productTypes },
	} = useStaticQuery(graphql`
		query {
			allShopifyProduct {
				productTypes: distinct(field: productType)
			}
		}
	`);
	return (
		<nav>
			<Link to="/">All Products</Link>

			{productTypes.map((name) => (
				<Link key={name} to={`/products/${slugify(name)}`}>
					{name}
				</Link>
			))}
		</nav>
	);
};

export default Header;
