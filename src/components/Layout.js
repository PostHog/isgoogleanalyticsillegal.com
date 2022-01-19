import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import React from "react";
import arrow from "../images/arrow.svg";
import logo from "../images/logo.svg";
import twitter from "../images/twitter.svg";
import SEO from "./SEO";

const ShareLink = ({ children, url, className = "" }) => {
  const width = 626;
  const height = 436;
  const handleClick = () => {
    if (typeof window !== "undefined") {
      const left = window.innerWidth / 2 - width / 2;
      const top = window.innerHeight / 2 - height / 2;
      window.open(
        url,
        "",
        `left=${left},top=${top},width=${width},height=${height}`
      );
    }
  };
  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

export default function Layout({
  children,
  hideMapLink,
  title,
  shareText = "",
  hideFooter,
}) {
  const { href } = useLocation();
  return (
    <>
      <SEO title={title} />
      <div className="flex md:flex-row flex-col">
        <div className="max-h-screen overflow-hidden flex-shrink-0 fixed md:block hidden">
          <aside
            style={{ writingMode: "vertical-lr" }}
            className="whitespace-nowrap bg-[#FC4E4E] transform -scale-y-100 -scale-x-100 px-[25px] w-[75.5px] flex items-center"
          >
            <div className="text-ticker flex">
              <p>Is Google Analytics illegal?</p>
              <p>Is Google Analytics illegal?</p>
              <p>Is Google Analytics illegal?</p>
              <p>Is Google Analytics illegal? </p>
              <p>Is Google Analytics illegal?</p>
              <p>Is Google Analytics illegal?</p>
              <p>Is Google Analytics illegal?</p>
              <p>Is Google Analytics illegal?</p>
              <p>Is Google Analytics illegal?</p>
              <p>Is Google Analytics illegal? </p>
              <p>Is Google Analytics illegal?</p>
              <p>Is Google Analytics illegal?</p>
            </div>
          </aside>
        </div>
        <div className="flex-grow relative flex flex-col md:ml-[75.5px] min-h-screen">
          <header className="py-[10px] border-b border-white border-opacity-20 px-5 flex-shrink-0">
            <div className="max-w-[1220px] mx-auto flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
              {!hideMapLink && (
                <Link
                  to="/"
                  className="text-[15px] font-bold flex space-x-2 items-center"
                >
                  <img className="opacity-50" src={arrow} />
                  <span>Back to map</span>
                </Link>
              )}
              <ShareLink
                url={`https://twitter.com/intent/tweet?url=${href}&text=${shareText}&hashtags=thanksGDPR`}
                className={`text-[14px] font-bold bg-[#1DA1F2] p-[10px] rounded flex items-center space-x-2 ml-auto justify-center w-full sm:w-auto ${
                  hideMapLink ? "mr-auto md:mr-0" : ""
                }`}
              >
                <img src={twitter} />
                <span>Share this page on Twitter</span>
              </ShareLink>
            </div>
          </header>
          <main className="flex flex-grow items-center">
            <div className="max-w-[1220px] mx-auto px-5 py-14 w-full">
              {children}
            </div>
          </main>
          <footer className="w-full px-5 pt-14 pb-3 border-t border-white border-opacity-20">
            {!hideFooter && (
              <div className="max-w-[1220px] mx-auto">
                <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-4 justify-between lg:items-end flex-shrink-0 lg:space-x-2">
                  <div>
                    <h4 className="text-[20px] font-bold flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-2 sm:space-y-0 m-0 mb-4 sm:mb-1">
                      <span>This message is brought to you by</span>
                      <img className="max-w-[130px]" src={logo} />
                    </h4>
                    <p className="m-0 text-[16px] font-bold">
                      PostHog is the only{" "}
                      <a
                        href="https://github.com/PostHog/posthog"
                        className="text-[#FF7636]"
                      >
                        open source product analytics platform
                      </a>{" "}
                      where customer data never leaves your infrastructure.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <a
                      className="text-[14px] font-bold bg-white p-[10px] rounded text-[#F54E00] text-center w-full sm:w-auto"
                      href="https://posthog.com"
                    >
                      Learn more at PostHog.com
                    </a>
                  </div>
                </div>
                <div className="sm:text-right mt-8 sm:mt-14">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.amcharts.com/"
                    className="text-[12px] font-bold text-white opacity-50"
                  >
                    SVG maps courtesy of amCharts
                  </a>
                </div>
              </div>
            )}
          </footer>
        </div>
      </div>
    </>
  );
}
