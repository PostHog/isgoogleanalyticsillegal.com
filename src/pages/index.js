import { Link } from "gatsby";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import * as React from "react";
import Layout from "../components/Layout";
import { Map, MapSmall } from "../components/Map";
import Main from "../templates/Main";

const Image = () => {
  const breakpoints = useBreakpoint();

  return (
    <figure>
      {breakpoints.sm ? (
        <Map className="h-auto w-full" />
      ) : (
        <MapSmall className="h-auto w-full sm:hidden" />
      )}
      <figcaption className="text-[14px] font-medium flex items-center justify-end space-x-2 mt-6">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M10.6916 5.61583C10.3316 5.25583 9.77332 5.25583 9.41332 5.61583C9.05332 5.97583 9.05332 6.53411 9.41332 6.89411L10.6199 8.09997H5.20151C4.69737 8.09997 4.30151 8.49583 4.30151 8.99997C4.30151 9.50412 4.69737 9.89997 5.20151 9.89997H10.6199L9.39573 11.1241C9.03573 11.4841 9.03573 12.0424 9.39573 12.4024C9.57573 12.5824 9.80987 12.6724 10.0257 12.6724C10.2599 12.6724 10.494 12.5824 10.6557 12.4024L13.4099 9.64822C13.5716 9.4865 13.6799 9.25237 13.6799 9.01822C13.6799 8.78408 13.5899 8.54993 13.4099 8.38822L10.6916 5.61583Z"
              fill="white"
            />
            <path
              d="M8.99995 0.450012C4.28413 0.450012 0.449951 4.28419 0.449951 9.00001C0.449951 13.7158 4.28413 17.55 8.99995 17.55C13.7158 17.55 17.55 13.7158 17.55 9.00001C17.55 4.28419 13.7158 0.450012 8.99995 0.450012ZM8.99995 15.75C5.27413 15.75 2.24995 12.7258 2.24995 9.00001C2.24995 5.27419 5.27413 2.25001 8.99995 2.25001C12.7258 2.25001 15.75 5.27419 15.75 9.00001C15.75 12.7258 12.7258 15.75 8.99995 15.75Z"
              fill="white"
            />
          </g>
        </svg>

        <span>
          Select a country in <strong className="text-[#FF5F5F]">red</strong> to
          see rulings concerning Google Analytics legality
        </span>
      </figcaption>
    </figure>
  );
};

const Body = () => {
  return (
    <>
      <p>
        Due to recent rulings on the GDPR, Google Analytics users are under fire
        for transmitting personal data outside of the EU.
      </p>
      <p>
        If your country is bound by the GDPR, continuing to use Google Analytics
        may now be illegal.
      </p>
      <p>
        The safest solution is to use an analytics provider that keeps data on
        your own infrastructure. If you stick with GA - learn about <a href="https://support.google.com/analytics/topic/2919631?hl=en&ref_topic=1008008">their data privacy settings</a>.
      </p>
      <p>More rulings are expected in 2022. We'll add them, or <a href="https://github.com/PostHog/isgoogleanalyticsillegal.com">submit a PR</a>.</p>

      <Link
        rel="noopener noreferrer"
        target="_blank"
        to="/alternatives"
        className="inline-flex justify-between space-x-1 items-center text-[14px] text-white font-bold p-[10px] rounded border border-white border-opacity-50 hover:border-opacity-75 w-full sm:w-auto"
      >
        <span>See Google Analytics alternatives</span>
      </Link>
    </>
  );
};

const Title = () => {
  return (
    <span className="inline-block max-w-[430px]">
      Is Google Analytics{" "}
      <span className="text-[70px] sm:text-[96px] text-[#FC4E4E] block">
        ILLEGAL
      </span>{" "}
      in your country?
    </span>
  );
};

export default function Index() {
  return (
    <Layout
      hideMapLink
      shareText="Is Google Analytics illegal in your country?"
    >
      <Main image={<Image />} body={<Body />} title={<Title />} />
    </Layout>
  );
}
