import React, { ReactNode } from "react";

interface AnalyticsWidgetProps {
  title: string;
  icon: string;
  iconAlt?: string;
  infoIcon?: string;
  timePeriod?: string;
  children: ReactNode;
  actionIcon?: string;
}

const AnalyticsWidget: React.FC<AnalyticsWidgetProps> = ({
  title,
  icon,
  iconAlt = "Widget icon",
  infoIcon,
  timePeriod = "Apr 25 to May 24",
  children,
  actionIcon,
}) => {
  return (
    <div className="border border-[color:var(--grey-tints-borders-grey,#E0E0E5)] bg-white w-full pb-4 rounded-2xl border-solid">
      <div className="items-center border-b-[color:var(--grey-tints-divider-grey,#EBEBED)] bg-[#F5F6FF] flex w-full gap-4 text-sm font-normal p-4 rounded-[16px_16px_0px_0px] border-b border-solid">
        <div className="self-stretch flex min-w-60 gap-2 flex-1 shrink basis-[0%] my-auto">
          <div className="text-[#9999A7] text-right leading-none">{icon} </div>
          <div className="text-[#33334F] leading-5 flex-1 shrink basis-[0%]">
            {title}
          </div>
          {infoIcon && <div className="absolute z-0 flex w-5 shrink-0 h-5" />}
        </div>
        {actionIcon && (
          <img
            src={actionIcon}
            className="aspect-[1] object-contain w-8 self-stretch shrink-0 my-auto"
            alt="Action"
          />
        )}
      </div>
      <div className="w-full mt-2 pt-2 px-4">
        <div className="self-stretch flex-1 shrink basis-[0%] min-h-6 w-full gap-2 text-sm text-[#9999A7] font-medium">
          {timePeriod}
        </div>
        <div className="border bg-[#EBEBED] min-h-0 w-full mt-3 border-[rgba(235,235,237,1)] border-solid" />
        {children}
      </div>
    </div>
  );
};

export default AnalyticsWidget;
