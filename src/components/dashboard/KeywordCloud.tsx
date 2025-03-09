import React from "react";

const KeywordCloud: React.FC = () => {
  return (
    <div className="flex w-full flex-col overflow-hidden items-stretch font-semibold leading-none mt-3 pt-2.5 pb-[27px] px-4">
      <div className="flex items-stretch gap-px whitespace-nowrap ml-4 max-md:ml-2.5">
        <div className="text-[#00C389] text-[27px] grow my-auto">Selfсare</div>
        <div className="flex flex-col items-stretch text-sm">
          <div className="text-[#EB5757] max-md:mr-[7px]">Niacinamide</div>
          <div className="text-[#3654FF] mt-[34px]">Natural</div>
        </div>
      </div>
      <div className="flex gap-[40px_50px] mt-3.5">
        <div className="text-[#3654FF] text-sm">Hydration</div>
        <div className="text-[#00C389] text-xl grow shrink w-[133px] mt-3">
          SPF Protection
        </div>
      </div>
    </div>
  );
};

export default KeywordCloud;
