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
    company: "Fathom",
    url: "https://usefathom.com/",
    description: "Website analytics",
    permissiveOpenSource: true,
    copyleftOpenSource: false,
    cloudHosting: true,
    selfHosting: true,
  },
  {
    company: "Plausible",
    url: "https://plausible.io/",
    description: "Website analytics",
    permissiveOpenSource: false,
    copyleftOpenSource: true,
    cloudHosting: true,
    selfHosting: true,
  },
  {
    company: "Matomo",
    url: "https://matomo.org/",
    description: "Website analytics",
    permissiveOpenSource: false,
    copyleftOpenSource: true,
    cloudHosting: true,
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
    description: "Website analytics, product analytics, experimentation, plugins",
    permissiveOpenSource: false,
    copyleftOpenSource: false,
    cloudHosting: true,
    selfHosting: true,
  },
  {
    company: "Pirsch Analytics",
    url: "https://pirsch.io/",
    description: "Website analytics",
    permissiveOpenSource: false,
    copyleftOpenSource: true,
    cloudHosting: true,
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
];

const Extra = () => {
  return (
    <>
      <table className="max-w-full">
        <tr className="sm:table-row hidden">
          <th></th>
          <th></th>
          <th><span className="opacity-50">Open source (</span><a href="https://opensource.org/faq#permissive" className="text-sm border-b border-dashed border-white border-opacity-50 font-normal">Permissive</a><span className="opacity-50">)</span></th>
          <th><span className="opacity-50">Open source (</span><a href="https://opensource.org/faq#copyleft" className="text-sm border-b border-dashed border-white border-opacity-50 font-normal">Copyleft</a><span className="opacity-50">)</span></th>
          <th><span className="opacity-50">Cloud hosting</span></th>
          <th><span className="opacity-50">Self hosting</span></th>
        </tr>
        {tableData.map(
          ({
            company,
            description,
            permissiveOpenSource,
            copyleftOpenSource,
            cloudHosting,
            selfHosting,
            url,
          }) => {
            return (
              <tr className="border-b border-white border-opacity-20">
                <td>
                  <a href={url}>{company}</a>
                </td>
                <td className="w-[270px]">
                  <p className="text-sm text-white text-opacity-75">{description}</p>
                </td>
                <td className="sm:table-cell flex justify-between">
                  <span className="sm:hidden inline-block opacity-50 font-medium">
                    Permissive open source
                  </span>{" "}
                  {permissiveOpenSource && <Check />}
                </td>
                <td className="sm:table-cell flex justify-between">
                  <span className="sm:hidden inline-block opacity-50 font-medium">
                    Copyleft open source
                  </span>{" "}
                  {copyleftOpenSource && <Check />}
                </td>
                <td className="sm:table-cell flex justify-between">
                  <span className="sm:hidden inline-block opacity-50 font-medium">
                    Cloud hosting
                  </span>{" "}
                  {cloudHosting && <Check />}
                </td>
                <td className="sm:table-cell flex justify-between">
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
