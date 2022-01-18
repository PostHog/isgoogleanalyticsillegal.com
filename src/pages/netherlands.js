import * as React from "react";
import Layout from "../components/Layout";
import { Netherlands } from "../components/Map";
import arrow from "../images/arrow.svg";
import Main from "../templates/Main";

const Image = () => {
  return <Netherlands className="h-auto w-full" />;
};

const Body = () => {
  return (
    <>
      <p>
        The Dutch Data Protection Authority warns that the use of Google
        Analytics 'may soon no longer be allowed', after{" "}
        <span className="text-[#F9BD2B]">
          a ruling by the Austrian privacy regulator.
        </span>{" "}
        A definitive conclusion is said to come at the beginning of 2022.
      </p>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://tweakers.net/nieuws/192020/autoriteit-persoonsgegevens-waarschuwt-voor-mogelijk-verbod-op-google-analytics.html"
        className="inline-flex space-x-1 items-center text-[14px] font-bold p-[10px] rounded border border-white border-opacity-50"
      >
        <span>Read more on Tweakers.net</span>
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
      in <span className="text-[#F9BD2B]">The Netherlands?</span>
    </span>
  );
};

export default function Index() {
  return (
    <Layout title="The Netherlands">
      <Main image={<Image />} body={<Body />} title={<Title />} />
    </Layout>
  );
}
