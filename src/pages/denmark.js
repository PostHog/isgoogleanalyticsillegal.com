import * as React from "react";
import Layout from "../components/Layout";
import { Denmark } from "../components/Map";
import arrow from "../images/arrow.svg";
import Main from "../templates/Main";

const Image = () => {
  return <Denmark className="h-auto w-full" />;
};

const Body = () => {
  return (
    <>
      <p>
        Danish Data Protection Authority concludes that the tool cannot be used legally without further ado.
        </p>
      <p>
        Legal use requires the implementation of a number of additional measures in addition to the settings provided by Google.
      </p>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.datatilsynet.dk/english/google-analytics/use-of-google-analytics-for-web-analytics"
        className="inline-flex justify-between space-x-1 items-center text-[14px] font-bold p-[10px] text-white rounded border border-white border-opacity-50 hover:border-opacity-75 w-full sm:w-auto"
      >
        <span>Read more on datatilsynet.dk</span>
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
      in <span className="text-[#F9BD2B]">Denmark?</span>
    </span>
  );
};

export default function Index() {
  return (
    <Layout
      title="Denmark"
      shareText="Did you know Google Analytics might be illegal in Denmark?"
    >
      <Main image={<Image />} body={<Body />} title={<Title />} />
    </Layout>
  );
}
