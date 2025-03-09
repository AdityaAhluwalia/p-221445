import React from "react";

const Header: React.FC = () => {
  return (
    <div className="shadow-[0px_3px_8px_0px_rgba(31,31,159,0.04)] bg-white z-10 w-full pt-[9px] max-md:max-w-full">
      <div className="flex items-stretch max-md:pr-5">
        <div className="flex mr-[-1082px] w-full gap-[40px_100px] justify-between flex-wrap grow shrink basis-auto my-auto px-8 max-md:max-w-full max-md:px-5">
          <div className="flex gap-1.5 w-[205px] px-[41px] py-1 max-md:px-5">
            <div className="italic text-2xl font-black mt-1">
              <span className="text-[#33334F]">Convo</span>
              <span className="text-[#00C389]">Track</span>
            </div>
            <div className="text-[#33334F] text-xs font-medium">Beta</div>
          </div>
          <div className="flex items-stretch gap-4">
            <div className="bg-white flex items-center gap-2 justify-center h-10 w-10 rounded-[1000px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/1edd507cee0370bdaea85326e83623b33ca3e0c0729fd284f7b27c0bf2bb7548?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-5 self-stretch my-auto"
                alt="Notification icon"
              />
            </div>
            <button className="border border-[#3654FF] min-h-10 gap-2 text-sm text-[#3654FF] font-semibold leading-none px-6 rounded-[100px] border-solid max-md:px-5">
              Save Report
            </button>
          </div>
        </div>
        <div className="items-center bg-[#F5F6FF] flex gap-6 flex-wrap grow shrink basis-auto px-8 py-4 rounded-2xl max-md:px-5">
          <div className="self-stretch flex flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto">
            <div className="text-[#9999A7] text-xs font-normal leading-none">
              Category
            </div>
            <div className="gap-1 text-sm text-[#33334F] font-semibold leading-none mt-1">
              Skin Care
            </div>
          </div>
          <div className="border bg-[#EBEBED] self-stretch w-0 shrink-0 h-[38px] border-[rgba(235,235,237,1)] border-solid" />
          <div className="self-stretch flex flex-col items-stretch whitespace-nowrap justify-center flex-1 shrink basis-[0%] my-auto">
            <div className="text-[#9999A7] text-xs font-normal leading-none">
              Location
            </div>
            <div className="gap-1 text-sm text-[#33334F] font-semibold leading-none mt-1">
              India
            </div>
          </div>
          <div className="border bg-[#EBEBED] self-stretch w-0 shrink-0 h-[38px] border-[rgba(235,235,237,1)] border-solid" />
          <div className="self-stretch flex flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto">
            <div className="text-[#9999A7] text-xs font-normal leading-none">
              Time Period
            </div>
            <div className="text-[#33334F] text-sm font-semibold leading-none mt-1">
              Jan 21 to Feb 19
            </div>
          </div>
          <div className="border bg-[#EBEBED] self-stretch w-0 shrink-0 h-[38px] border-[rgba(235,235,237,1)] border-solid" />
          <div className="self-stretch flex flex-col items-stretch whitespace-nowrap justify-center w-20 my-auto">
            <div className="text-[#9999A7] text-xs font-normal leading-none">
              Influencers
            </div>
            <div className="gap-1 text-sm text-[#33334F] font-semibold leading-none mt-1">
              10K
            </div>
          </div>
          <div className="border bg-[#EBEBED] self-stretch w-0 shrink-0 h-[38px] border-[rgba(235,235,237,1)] border-solid" />
          <div className="self-stretch flex flex-col items-stretch whitespace-nowrap justify-center w-14 my-auto">
            <div className="text-[#9999A7] text-xs font-normal leading-none">
              Posts
            </div>
            <div className="gap-1 text-sm text-[#33334F] font-semibold leading-none mt-1">
              6K
            </div>
          </div>
          <div className="border bg-[#EBEBED] self-stretch w-0 shrink-0 h-[38px] border-[rgba(235,235,237,1)] border-solid" />
          <div className="self-stretch flex flex-col items-stretch text-xs text-[#9999A7] font-normal whitespace-nowrap leading-none justify-center w-14 my-auto">
            <div>Source</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/ccbff9b0b3ffb1c96d8141aed44b46cbcbc1c7864860b4658288cdcbb2995212?placeholderIfAbsent=true"
              className="aspect-[2.8] object-contain w-full gap-[-6px] mt-1"
              alt="Source icons"
            />
          </div>
        </div>
      </div>
      <div className="border bg-[#E0E0E5] min-h-px w-full mt-2 border-[rgba(224,224,229,1)] border-solid max-md:max-w-full" />
    </div>
  );
};

export default Header;
