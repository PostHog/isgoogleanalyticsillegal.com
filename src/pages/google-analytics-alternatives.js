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
      "Product analytics with session recording, feature flags, heatmaps",
    openSource: true,
    cloudHosting: true,
    selfHosting: true,
  },
  {
    company: "Plausible",
    url: "https://plausible.io/",
    description: "Google Analytics alternative",
    openSource: true,
    cloudHosting: true,
    selfHosting: true,
  },
  {
    company: "Fathom",
    url: "https://usefathom.com/",
    description: "Website analytics",
    openSource: false,
    cloudHosting: true,
    selfHosting: false,
  },
];

const Extra = () => {
  return (
    <>
      <table>
        <tr className="sm:table-row hidden">
          <th></th>
          <th></th>
          <th>Open source</th>
          <th>Cloud hosting</th>
          <th>Self hosting</th>
        </tr>
        {tableData.map(
          ({
            company,
            description,
            openSource,
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
                  <p>{description}</p>
                </td>
                <td className="sm:table-cell flex justify-between">
                  <span className="sm:hidden inline-block opacity-50 font-medium">
                    Open source
                  </span>{" "}
                  {openSource && <Check />}
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
