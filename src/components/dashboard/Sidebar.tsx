import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="border-r-[color:var(--grey-tints-borders-grey,#E0E0E5)] shadow-[0px_4px_42px_0px_rgba(8,26,130,0.06)] backdrop-blur-[13px] bg-white min-h-[936px] p-6 border-r border-solid max-md:hidden max-md:px-5">
      <div className="flex w-full flex-col items-stretch justify-center max-md:hidden">
        <div className="flex w-full flex-col items-stretch justify-center pb-4 border-[rgba(235,235,237,1)] border-b max-md:hidden">
          <div className="text-[#ADADB9] text-ellipsis text-xs font-medium leading-none uppercase">
            Social Insights
          </div>
          <div className="flex w-full flex-col items-stretch text-base text-[#707084] font-light whitespace-nowrap text-center justify-center mt-4 max-md:hidden">
            <div className="relative flex min-h-9 w-full items-start gap-2 text-[#33334F] font-black">
              <div className="bg-blend-multiply bg-[rgba(247,248,254,1)] absolute z-0 flex w-[68px] shrink-0 h-9 translate-x-[0%] -translate-y-2/4 -right-6 top-2/4" />
              <div className="self-stretch w-8 z-0 h-5 flex-1 shrink basis-[0%] my-auto">
                fire
              </div>
            </div>
            <div className="flex min-h-9 w-full items-center gap-2 mt-2">
              <div className="self-stretch w-full h-5 flex-1 shrink basis-[0%] my-auto">
                message-text
              </div>
            </div>
            <div className="flex min-h-9 w-full items-center gap-2 mt-2">
              <div className="self-stretch w-full h-5 flex-1 shrink basis-[0%] my-auto">
                chart-user
              </div>
            </div>
            <div className="flex min-h-9 w-full items-center gap-2 mt-2">
              <div className="self-stretch w-full h-5 flex-1 shrink basis-[0%] my-auto">
                gauge-max
              </div>
            </div>
            <div className="flex min-h-9 w-full items-center gap-2 mt-2">
              <div className="self-stretch w-full h-5 flex-1 shrink basis-[0%] my-auto">
                chart-mixed
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-stretch justify-center mt-6 pb-4 border-[rgba(235,235,237,1)] border-b">
          <div className="text-[#ADADB9] text-ellipsis text-xs font-medium leading-none uppercase">
            Influencer Insights
          </div>
          <div className="flex w-full flex-col items-stretch text-base text-[#707084] font-light whitespace-nowrap text-center justify-center mt-4">
            <div className="flex min-h-9 w-full items-center gap-2">
              <div className="self-stretch w-full h-5 flex-1 shrink basis-[0%] my-auto">
                user-crown
              </div>
            </div>
            <div className="flex min-h-9 w-full items-center gap-2 mt-2">
              <div className="self-stretch w-full h-5 flex-1 shrink basis-[0%] my-auto">
                rocket
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-stretch justify-center mt-6 pb-4 border-[rgba(235,235,237,1)] border-b">
          <div className="text-[#ADADB9] text-ellipsis text-xs font-medium leading-none uppercase">
            Content Analysis
          </div>
          <div className="flex w-full flex-col items-stretch text-base text-[#707084] font-light whitespace-nowrap text-center justify-center mt-4">
            <div className="flex min-h-9 w-full items-center gap-2">
              <div className="self-stretch w-full h-5 flex-1 shrink basis-[0%] my-auto">
                photo-film
              </div>
            </div>
            <div className="flex min-h-9 w-full items-center gap-2 mt-2">
              <div className="self-stretch w-full h-5 flex-1 shrink basis-[0%] my-auto">
                bolt
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-stretch justify-center mt-6 pb-4 border-[rgba(235,235,237,1)] border-b">
          <div className="text-[#ADADB9] text-ellipsis text-xs font-medium leading-none uppercase">
            Shopper data analysis
          </div>
          <div className="flex w-full flex-col items-stretch text-base text-[#707084] font-light whitespace-nowrap text-center justify-center mt-4">
            <div className="flex min-h-9 w-full items-center gap-2">
              <div className="self-stretch w-full h-5 flex-1 shrink basis-[0%] my-auto">
                globe-pointer
              </div>
            </div>
            <div className="flex min-h-9 w-full items-center gap-2 mt-2">
              <div className="self-stretch w-full h-5 flex-1 shrink basis-[0%] my-auto">
                cart-shopping
              </div>
            </div>
            <div className="flex min-h-9 w-full items-center gap-2 mt-2">
              <div className="self-stretch w-full h-5 flex-1 shrink basis-[0%] my-auto">
                star
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-stretch text-base text-[#707084] font-light whitespace-nowrap text-center justify-center mt-12 max-md:mt-10">
        <div className="flex min-h-9 w-full items-center gap-2">
          <div className="self-stretch w-full h-5 flex-1 shrink basis-[0%] my-auto">
            gear
          </div>
        </div>
        <div className="flex min-h-9 w-full items-center gap-2 mt-2">
          <div className="self-stretch w-full h-5 flex-1 shrink basis-[0%] my-auto">
            user
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
