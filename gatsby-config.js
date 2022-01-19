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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Libre Franklin\:500,600,700`],
        display: "block",
      },
    },
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: {
          sm: "(min-width: 640px)",
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: `gatsby-plugin-posthog`,
      options: {
        apiKey: "sTMFPsFhdP1Ssg",
        apiHost: "https://app.posthog.com",
        head: true,
        isEnabledDevMode: true,
        initOptions: {
          _capture_metrics: true,
          persistence: "memory",
        },
      },
    },
  ],
};
