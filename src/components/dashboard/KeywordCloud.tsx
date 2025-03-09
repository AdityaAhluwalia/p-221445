
import React, { useState } from "react";

interface KeywordItem {
  text: string;
  size: string;
  color: string;
  className?: string;
}

const KeywordCloud: React.FC = () => {
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [hoveredKeyword, setHoveredKeyword] = useState<string | null>(null);
  
  const keywords: KeywordItem[] = [
    { 
      text: "Selfсare", 
      size: "text-[27px]", 
      color: "text-[#00C389]", 
      className: "grow my-auto" 
    },
    { 
      text: "Niacinamide", 
      size: "text-sm", 
      color: "text-[#EB5757]", 
      className: "max-md:mr-[7px]" 
    },
    { 
      text: "Natural", 
      size: "text-sm", 
      color: "text-[#3654FF]", 
      className: "mt-[34px]" 
    },
    { 
      text: "Hydration", 
      size: "text-sm", 
      color: "text-[#3654FF]", 
      className: "" 
    },
    { 
      text: "SPF Protection", 
      size: "text-xl", 
      color: "text-[#00C389]", 
      className: "grow shrink w-[133px] mt-3" 
    },
  ];
  
  const toggleKeyword = (keyword: string) => {
    setSelectedKeywords(prev => 
      prev.includes(keyword) 
        ? prev.filter(k => k !== keyword)
        : [...prev, keyword]
    );
  };
  
  return (
    <div className="flex w-full flex-col overflow-hidden items-stretch font-semibold leading-none mt-3 pt-2.5 pb-[27px] px-4">
      {/* First row */}
      <div className="flex items-stretch gap-px whitespace-nowrap ml-4 max-md:ml-2.5">
        <div className={keywords[0].className}>
          <span 
            className={`${keywords[0].color} ${keywords[0].size} cursor-pointer px-2 py-1 rounded-md transition-all duration-200 ${
              selectedKeywords.includes(keywords[0].text) 
                ? "bg-gray-100 shadow-sm" 
                : ""
            } ${
              hoveredKeyword === keywords[0].text 
                ? "scale-110" 
                : ""
            }`}
            onClick={() => toggleKeyword(keywords[0].text)}
            onMouseEnter={() => setHoveredKeyword(keywords[0].text)}
            onMouseLeave={() => setHoveredKeyword(null)}
          >
            {keywords[0].text}
          </span>
        </div>
        <div className="flex flex-col items-stretch text-sm">
          <div className={keywords[1].className}>
            <span 
              className={`${keywords[1].color} ${keywords[1].size} cursor-pointer px-2 py-1 rounded-md transition-all duration-200 ${
                selectedKeywords.includes(keywords[1].text) 
                  ? "bg-gray-100 shadow-sm" 
                  : ""
              } ${
                hoveredKeyword === keywords[1].text 
                  ? "scale-110" 
                  : ""
              }`}
              onClick={() => toggleKeyword(keywords[1].text)}
              onMouseEnter={() => setHoveredKeyword(keywords[1].text)}
              onMouseLeave={() => setHoveredKeyword(null)}
            >
              {keywords[1].text}
            </span>
          </div>
          <div className={keywords[2].className}>
            <span 
              className={`${keywords[2].color} ${keywords[2].size} cursor-pointer px-2 py-1 rounded-md transition-all duration-200 ${
                selectedKeywords.includes(keywords[2].text) 
                  ? "bg-gray-100 shadow-sm" 
                  : ""
              } ${
                hoveredKeyword === keywords[2].text 
                  ? "scale-110" 
                  : ""
              }`}
              onClick={() => toggleKeyword(keywords[2].text)}
              onMouseEnter={() => setHoveredKeyword(keywords[2].text)}
              onMouseLeave={() => setHoveredKeyword(null)}
            >
              {keywords[2].text}
            </span>
          </div>
        </div>
      </div>
      
      {/* Second row */}
      <div className="flex gap-[40px_50px] mt-3.5">
        <div className={keywords[3].className}>
          <span 
            className={`${keywords[3].color} ${keywords[3].size} cursor-pointer px-2 py-1 rounded-md transition-all duration-200 ${
              selectedKeywords.includes(keywords[3].text) 
                ? "bg-gray-100 shadow-sm" 
                : ""
            } ${
              hoveredKeyword === keywords[3].text 
                ? "scale-110" 
                : ""
            }`}
            onClick={() => toggleKeyword(keywords[3].text)}
            onMouseEnter={() => setHoveredKeyword(keywords[3].text)}
            onMouseLeave={() => setHoveredKeyword(null)}
          >
            {keywords[3].text}
          </span>
        </div>
        <div className={keywords[4].className}>
          <span 
            className={`${keywords[4].color} ${keywords[4].size} cursor-pointer px-2 py-1 rounded-md transition-all duration-200 ${
              selectedKeywords.includes(keywords[4].text) 
                ? "bg-gray-100 shadow-sm" 
                : ""
            } ${
              hoveredKeyword === keywords[4].text 
                ? "scale-110" 
                : ""
            }`}
            onClick={() => toggleKeyword(keywords[4].text)}
            onMouseEnter={() => setHoveredKeyword(keywords[4].text)}
            onMouseLeave={() => setHoveredKeyword(null)}
          >
            {keywords[4].text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default KeywordCloud;
