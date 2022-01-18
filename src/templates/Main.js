import * as React from "react";

export default function Main({ title, body, image }) {
  return (
    <div className="flex lg:space-x-[60px] lg:space-y-0 space-y-8 lg:flex-row flex-col">
      <div className="lg:max-w-[430px] flex-shrink-0">
        <div className="py-[5px] border-b border-t border-opacity-20 border-white mb-7">
          <h1 className="text-[30px] sm:text-[44px] leading-[1.2] py-[16px] border-t border-b border-opacity-20 border-white font-bold">
            {title}
          </h1>
        </div>
        <div className="body-container">{body}</div>
      </div>
      <div className="flex-grow flex flex-col justify-end">{image}</div>
    </div>
  );
}
