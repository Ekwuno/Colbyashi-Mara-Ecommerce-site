import { graphql, Link } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { gridItemOne } from "./index.module.css";
import Layout from "../components/layout";

export const query = graphql`
	query {
		allShopifyProduct {
			edges {
				node {
					title
					description
					priceRangeV2 {
						maxVariantPrice {
							amount
							currencyCode
						}
					}
					images {
						gatsbyImageData(aspectRatio: 1, width: 640)
					}
					slug: gatsbyPath(
						filePath: "/products/{ShopifyProduct.productType}/{ShopifyProduct.handle}"
					)
				}
			}
		}
	}
`;

const IndexPage = ({ data }) => {
	return (
		<Layout>
			<main className={gridItemOne}>
				{data.allShopifyProduct.edges.map(({ node: product }) => (
					<Link to={product.slug}>
						<div>
							<GatsbyImage
								image={product.images[0].gatsbyImageData}
								alt={product.title}
							/>
						</div>

						<div>
							<h2> {product.title}</h2>
							{
								(product.priceRangeV2.maxVariantPrice.currencyCode,
								product.priceRangeV2.maxVariantPrice.amount)
							}
						</div>
					</Link>
				))}
			</main>
		</Layout>
	);
};

export default IndexPage;
