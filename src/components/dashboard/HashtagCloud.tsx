import React from "react";

const HashtagCloud: React.FC = () => {
  return (
    <div className="flex w-full flex-col overflow-hidden items-stretch font-semibold whitespace-nowrap leading-none mt-3 pt-4 pb-[25px]">
      <div className="text-[rgba(249,150,45,1)] text-base mr-[38px] max-md:mr-2.5">
        #SkinCareTips
      </div>
      <div className="flex w-full flex-col items-stretch mt-1.5 pl-3.5 pr-[33px] max-md:pr-5">
        <div className="text-[#00C389] text-[28px] max-md:ml-0.5">
          #SkincareRoutine
        </div>
        <div className="flex items-stretch gap-[30px] mt-1.5">
          <div className="text-[#00C389] text-[17px] grow shrink w-[120px]">
            #VeganSkincare
          </div>
          <div className="text-[rgba(249,150,45,1)] text-sm mt-2.5">
            #AntiAging
          </div>
        </div>
        <div className="text-[#ADADB9] text-xs ml-[53px] mt-1 max-md:ml-2.5">
          #ClearSkin
        </div>
      </div>
    </div>
  );
};

export default HashtagCloud;
