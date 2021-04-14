module.exports = {
  siteMetadata: {
    title: "myshopifyDemo ",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "",
        accessToken: "",
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
