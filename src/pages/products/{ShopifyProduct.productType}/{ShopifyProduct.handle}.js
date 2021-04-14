import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { container } from "./product.module.css";

export const query = graphql`
	query($id: String = "") {
		shopifyProduct(id: { eq: $id }) {
			id
			title
			description
			images {
				gatsbyImageData(aspectRatio: 1, width: 640)
			}
		}
	}
`;

const Product = ({ data }) => {
	return (
		<main className={container}>
			<GatsbyImage image={data.shopifyProduct.images[0].gatsbyImageData} />

			<div>
				<h2> {data.shopifyProduct.title}</h2>
				<div>{data.shopifyProduct.description}</div>
			</div>
		</main>
	);
};

export default Product;
