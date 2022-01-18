module.exports = {
  siteMetadata: {
    title: `Is Google Analytics illegal?`,
    siteUrl: `https://www.isgoogleanalyticsillegal.com`,
    titleTemplate: `%s - Is Google Analytics illegal?`,
    description: `Due to recent rulings on the GDPR, Google Analytics users are under fire
    for transmitting personal data outside of the EU.`,
    twitterUsername: `@posthog`,
    image: `/banner.jpg`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Libre Franklin"],
        },
      },
    },
  ],
};
