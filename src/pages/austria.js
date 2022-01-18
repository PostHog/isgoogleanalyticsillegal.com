import * as React from "react";
import Layout from "../components/Layout";
import { Austria } from "../components/Map";
import arrow from "../images/arrow.svg";
import Main from "../templates/Main";

const Image = () => {
  return <Austria className="h-auto w-full" />;
};

const Body = () => {
  return (
    <>
      <p>
        The Austrian DPA held that the use of Google Analytics by an Austrian
        website provider led to transfers of personal data to Google LLC in the
        U.S.{" "}
        <a
          href="https://gdprhub.eu/index.php?title=DSB_(Austria)_-_2021-0.586.257_(D155.027)"
          rel="noopener noreferrer"
          target="_blank"
          className="text-[#F9BD2B]"
        >
          in violation of Chapter V. of the GDPR.
        </a>
      </p>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://gdprhub.eu/index.php?title=DSB_(Austria)_-_2021-0.586.257_(D155.027)"
        className="inline-flex justify-between space-x-1 items-center text-[14px] font-bold p-[10px] rounded border border-white border-opacity-50 w-full sm:w-auto"
      >
        <span>Read more on GDPRhub</span>
        <img className="opacity-50 transform rotate-[135deg]" src={arrow} />
      </a>
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
      in <span className="text-[#F9BD2B]">Austria?</span>
    </span>
  );
};

export default function Index() {
  return (
    <Layout
      title="Austria"
      shareText="Did you know Google Analytics is illegal in Austria?"
    >
      <Main image={<Image />} body={<Body />} title={<Title />} />
    </Layout>
  );
}
