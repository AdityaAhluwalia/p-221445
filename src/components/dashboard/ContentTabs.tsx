import React, { useState } from "react";

interface ContentTabsProps {
  children: React.ReactNode;
}

const ContentTabs: React.FC<ContentTabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState("Top Trending Content");

  const tabs = [
    "Top Trends",
    "Top Trending Content",
    "Video Trends",
    "Top Comments",
  ];

  return (
    <div className="max-md:max-w-full">
      <div className="bg-white shadow-[0px_3px_32px_rgba(8,26,130,0.09)] flex min-h-12 w-full items-center gap-4 text-sm text-[#9999A7] font-semibold text-center leading-none flex-wrap pl-6 pr-8 max-md:max-w-full max-md:px-5">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`self-stretch min-h-10 my-auto px-6 py-2.5 rounded-[100px] max-md:px-5 ${
              activeTab === tab ? "bg-[#3654FF] text-white" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="ml-6 mr-8 mt-6 max-md:max-w-full max-md:mr-2.5">
        <div className="flex min-h-10 w-full items-center gap-6 text-[#33334F] flex-wrap max-md:max-w-full">
          <div className="text-base font-semibold leading-6 self-stretch flex-1 shrink basis-8 my-auto max-md:max-w-full">
            🔥 {{ XX }} Trending Posts
            <span className="font-normal"> in the las</span>t 30 days
            <span className="font-normal"> i</span>n Skincare
          </div>
          <div className="items-center border border-[color:var(--grey-borders,#E0E0E5)] bg-white self-stretch flex min-w-60 min-h-10 gap-2 text-sm font-normal leading-none w-[326px] my-auto px-4 py-2.5 rounded-[100px] border-solid">
            <div className="self-stretch flex-1 shrink basis-[0%] my-auto">
              <span className="text-[#707084]">Sorted by:</span>
              <span className="font-medium"> Engagement</span>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/78a64c960a8a9c6869be12aec65c4abc0e5fa184c36d40635f813b69870287f0?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              alt="Sort dropdown"
            />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ContentTabs;
