import * as React from "react";
import Layout from "../components/Layout";
import Main from "../templates/Main";

const Check = () => {
  return (
    <svg
      className="sm:mx-auto"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.6084 17.9748L9.57465 17.9448L9.54371 17.9748L4.30499 12.7351L6.1678 10.8732L9.5746 14.2868L17.832 6.02549L19.6939 7.88923L9.6084 17.9748ZM11.9981 0C5.37456 0 0 5.3748 0 12.001C0 18.6271 5.3748 24 11.9981 24C18.6242 24 24 18.6271 24 12.001C24 5.3748 18.6245 0 11.9981 0Z"
        fill="#43AF79"
      />
    </svg>
  );
};

const Body = () => {
  return (
    <>
      <p>
        Even though Google Analytics can’t be used in certain locations with
        default settings, there are a handful of alternatives available.
      </p>
    </>
  );
};

const Title = () => {
  return (
    <span className="inline-block max-w-[430px]">
      Google Analytics alternatives
    </span>
  );
};

const tableData = [
  {
    company: "PostHog",
    url: "https://posthog.com",
    description:
      "Website analytics, product analytics, experimentation, session recording, feature flags, plugins, warehouse-compatible",
    permissiveOpenSource: true,
    copyleftOpenSource: false,
    cloudHosting: true,
    cloudHostingLocation: "EU/US",
    selfHosting: true,
  },
  {
    company: "Fathom",
    url: "https://usefathom.com/",
    description: "Website analytics",
    permissiveOpenSource: true,
    copyleftOpenSource: false,
    cloudHosting: true,
    cloudHostingLocation: "EU/US",
    selfHosting: true,
  },
  {
    company: "Plausible",
    url: "https://plausible.io/",
    description: "Website analytics",
    permissiveOpenSource: false,
    copyleftOpenSource: true,
    cloudHosting: true,
    cloudHostingLocation: "EU",
    selfHosting: true,
  },
  {
    company: "Matomo",
    url: "https://matomo.org/",
    description: "Website analytics",
    permissiveOpenSource: false,
    copyleftOpenSource: true,
    cloudHosting: true,
    cloudHostingLocation: "EU",
    selfHosting: true,
  },
  {
    company: "Open Web Analytics",
    url: "https://openwebanalytics.com/",
    description: "Website analytics, session recording",
    permissiveOpenSource: false,
    copyleftOpenSource: true,
    cloudHosting: false,
    selfHosting: true,
  },
  {
    company: "Countly",
    url: "https://count.ly/",
    description:
      "Website analytics, product analytics, experimentation, plugins",
    permissiveOpenSource: false,
    copyleftOpenSource: false,
    cloudHosting: true,
    selfHosting: true,
  },
  {
    company: "GoAccess",
    url: "https://goaccess.io/",
    description: "Website analytics",
    permissiveOpenSource: true,
    copyleftOpenSource: false,
    cloudHosting: false,
    selfHosting: true,
  },
  {
    company: "Pirsch Analytics",
    url: "https://pirsch.io/",
    description: "Website analytics",
    permissiveOpenSource: false,
    copyleftOpenSource: true,
    cloudHosting: true,
    cloudHostingLocation: "EU",
    selfHosting: false,
  },
  {
    company: "Visitor Analytics",
    url: "https://www.visitor-analytics.io/en/",
    description: "Website analytics, heatmaps, session recording",
    permissiveOpenSource: false,
    copyleftOpenSource: false,
    cloudHosting: true,
    selfHosting: false,
  },
  {
    company: "66Analytics",
    url: "https://66analytics.com/",
    description: "Website analytics, heatmaps, session recording",
    permissiveOpenSource: false,
    copyleftOpenSource: false,
    cloudHosting: false,
    selfHosting: true,
  },
  {
    company: "Simple Analytics",
    url: "https://simpleanalytics.com/",
    description: "European privacy-first analytics (without using IP's)",
    permissiveOpenSource: false,
    copyleftOpenSource: false,
    cloudHosting: true,
    cloudHostingLocation: "EU",
    selfHosting: false,
  },
  {
    company: "TelemetryDeck",
    url: "https://telemetrydeck.com/",
    description: "100% anonymized analytics for apps and websites",
    permissiveOpenSource: false,
    copyleftOpenSource: false,
    cloudHosting: true,
    selfHosting: true,
  },
  {
    company: "Fugu",
    url: "https://fugu.lol",
    description: "Product analytics",
    permissiveOpenSource: false,
    copyleftOpenSource: true,
    cloudHosting: true,
    cloudHostingLocation: "EU",
    selfHosting: true,
  },
  {
    company: "Insights",
    url: "https://getinsights.io",
    description: "Privacy-focused, cookie-free Google Analytics alternative",
    permissiveOpenSource: false,
    copyleftOpenSource: false,
    cloudHosting: true,
    selfHosting: false,
  },
    {
    company: "Umami",
    url: "https://umami.is",
    description: "Privacy-focused website analytics",
    permissiveOpenSource: true,
    copyleftOpenSource: false,
    cloudHosting: false,
    selfHosting: true,
  },
  {
    company: "Chiffre",
    url: "https://chiffre.io",
    description: "End-to-end encrypted web analytics (hosted in France)",
    permissiveOpenSource: true,
    copyleftOpenSource: false,
    cloudHosting: true,
    cloudHostingLocation: "EU",
    selfHosting: false,
  },
  {
    company: "Piwik PRO",
    url: "https://piwik.pro/",
    description: "Web analytics platform focused on privacy and data security",
    permissiveOpenSource: false,
    copyleftOpenSource: false,
    cloudHosting: true,
    selfHosting: true,
  },
  {
    company: "GoatCounter",
    url: "https://www.goatcounter.com/",
    description: "Web analytics with Go and SQLite or PostgreSQL, without cookies. Supported by EU NGI.",
    permissiveOpenSource: false,
    copyleftOpenSource: true,
    cloudHosting: true,
    selfHosting: true,
  },
  {
    company: "Swetrix",
    url: "https://swetrix.com",
    description: "Cookieless and privacy-focused website analytics",
    permissiveOpenSource: false,
    copyleftOpenSource: true,
    cloudHosting: true,
    cloudHostingLocation: "EU",
    selfHosting: true,
  },
  {
    company: "Counter",
    url: "https://counter.dev",
    description: "Simple and Privacy-friendly web analytics (No Cookies, logging, IPs)",
    permissiveOpenSource: false,
    copyleftOpenSource: true,
    cloudHosting: true,
    selfHosting: true,
  },
    {
    company: "Wide Angle Analytics",
    url: "https://wideangle.co/",
    description: "Strictly GDPR-compliant web analytics without any data transfer outside of EU.",
    permissiveOpenSource: false,
    copyleftOpenSource: false,
    cloudHosting: true,
    cloudHostingLocation: "EU",
    selfHosting: false,
  },
];

const Extra = () => {
  return (
    <>
      <table className="max-w-full">
        <tr className="sm:table-row hidden align-top">
          <th></th>
          <th>
            <span className="opacity-50">
              Open source <br />(
            </span>
            <a
              href="https://opensource.org/faq#permissive"
              className="text-sm border-b border-dashed border-white border-opacity-50 font-normal"
            >
              Permissive
            </a>
            <span className="opacity-50">)</span>
          </th>
          <th>
            <span className="opacity-50">
              Open source <br />(
            </span>
            <a
              href="https://opensource.org/faq#copyleft"
              className="text-sm border-b border-dashed border-white border-opacity-50 font-normal"
            >
              Copyleft
            </a>
            <span className="opacity-50">)</span>
          </th>
          <th>
            <span className="opacity-50">Cloud hosting</span>
          </th>
          <th>
            <span className="opacity-50">Self hosting</span>
          </th>
        </tr>
        {tableData.map(
          ({
            company,
            description,
            permissiveOpenSource,
            copyleftOpenSource,
            cloudHosting,
            cloudHostingLocation,
            selfHosting,
            url,
          }) => {
            return (
              <tr className="border-b border-white border-opacity-20" valign="top">
                <td className="md:max-w-xs pt-8 md:pt-4">
                  <a href={url} className="block">{company}</a>

                  <p className="text-sm text-white text-opacity-75">
                    {description}
                  </p>
                </td>
                <td className="sm:table-cell flex justify-between pt-5">
                  <span className="sm:hidden inline-block opacity-50 font-medium">
                    Permissive open source
                  </span>{" "}
                  {permissiveOpenSource && <Check />}
                </td>
                <td className="sm:table-cell flex justify-between pt-5">
                  <span className="sm:hidden inline-block opacity-50 font-medium">
                    Copyleft open source
                  </span>{" "}
                  {copyleftOpenSource && <Check />}
                </td>
                <td className="sm:table-cell flex justify-between pt-5 text-center">
                  <span className="sm:hidden inline-block opacity-50 font-medium">
                    Cloud hosting
                  </span>{" "}
                  <span className="flex flex-row-reverse gap-4 md:gap-0 items-end md:block">
                    {cloudHosting && <Check />}
                    {cloudHostingLocation && <span className='text-sm opacity-60 block md:mt-2'>({cloudHostingLocation})</span>}
                  </span>
                </td>
                <td className="sm:table-cell flex justify-between pt-5 pb-8 md:pb-0">
                  <span className="sm:hidden inline-block opacity-50 font-medium">
                    Self hosting
                  </span>{" "}
                  {selfHosting && <Check />}
                </td>
              </tr>
            );
          }
        )}
      </table>
      <p className="max-w-[450px]">
        Did we miss a privacy-focused Google Analytics alternative? Submit a{" "}
        <a
          className="text-[#FF7636]"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/PostHog/isgoogleanalyticsillegal.com"
        >
          pull request
        </a>{" "}
        on GitHub.
      </p>
    </>
  );
};

export default function Index() {
  return (
    <Layout
      hideFooter
      title="Google Analytics alternatives"
      shareText="Check out these Google Analytics alternatives!"
    >
      <Main body={<Body />} title={<Title />} extra={<Extra />} />
    </Layout>
  );
}
