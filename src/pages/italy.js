import * as React from "react";
import Layout from "../components/Layout";
import { Italy } from "../components/Map";
import arrow from "../images/arrow.svg";
import Main from "../templates/Main";

const Image = () => {
  return <Italy className="h-auto w-full" />;
};

const Body = () => {
  return (
    <>
      <p>
      A website using Google Analytics (GA) without the safeguards set out in the EU GDPR violates data protection law because it transfers users’ data to the USA, which is a country without an adequate level of data protection.
      </p>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.gpdp.it/web/guest/home/docweb/-/docweb-display/docweb/9782874#english"
        className="inline-flex justify-between space-x-1 items-center text-[14px] font-bold p-[10px] text-white rounded border border-white border-opacity-50 hover:border-opacity-75 w-full sm:w-auto"
      >
        <span>Read more on gpdp.it</span>
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
      in <span className="text-[#F9BD2B]">Italy?</span>
    </span>
  );
};

export default function Index() {
  return (
    <Layout
      title="Italy"
      shareText="Did you know Google Analytics might be illegal in Italy?"
    >
      <Main image={<Image />} body={<Body />} title={<Title />} />
    </Layout>
  );
}
