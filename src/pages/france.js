import * as React from "react";
import Layout from "../components/Layout";
import { France } from "../components/Map";
import arrow from "../images/arrow.svg";
import Main from "../templates/Main";

const Image = () => {
  return <France className="h-auto w-full" />;
};

const Body = () => {
  return (
    <>
      <p>
        The CNIL (the French Data Protection Agency) concludes that transfers to
        the United States are currently not sufficiently regulated, and that
        data of Internet users transferred to the United States is in violation
        of Articles 44 et seq. of the GDPR.
      </p>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.cnil.fr/en/use-google-analytics-and-data-transfers-united-states-cnil-orders-website-manageroperator-comply"
        className="inline-flex justify-between space-x-1 items-center text-[14px] font-bold p-[10px] text-white rounded border border-white border-opacity-50 hover:border-opacity-75 w-full sm:w-auto"
      >
        <span>Read more on CNIL.fr</span>
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
      in <span className="text-[#F9BD2B]">France?</span>
    </span>
  );
};

export default function Index() {
  return (
    <Layout
      title="France"
      shareText="Did you know Google Analytics might be illegal soon in France?"
    >
      <Main image={<Image />} body={<Body />} title={<Title />} />
    </Layout>
  );
}
