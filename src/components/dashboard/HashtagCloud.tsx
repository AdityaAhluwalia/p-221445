
import React, { useState } from "react";

interface HashtagItem {
  text: string;
  size: string;
  color: string;
  className?: string;
}

const HashtagCloud: React.FC = () => {
  const [selectedHashtags, setSelectedHashtags] = useState<string[]>([]);
  const [hoveredHashtag, setHoveredHashtag] = useState<string | null>(null);
  
  const hashtags: HashtagItem[] = [
    { 
      text: "#SkinCareTips", 
      size: "text-base", 
      color: "text-[rgba(249,150,45,1)]", 
      className: "mr-[38px] max-md:mr-2.5" 
    },
    { 
      text: "#SkincareRoutine", 
      size: "text-[28px]", 
      color: "text-[#00C389]", 
      className: "max-md:ml-0.5" 
    },
    { 
      text: "#VeganSkincare", 
      size: "text-[17px]", 
      color: "text-[#00C389]", 
      className: "grow shrink w-[120px]" 
    },
    { 
      text: "#AntiAging", 
      size: "text-sm", 
      color: "text-[rgba(249,150,45,1)]", 
      className: "mt-2.5" 
    },
    { 
      text: "#ClearSkin", 
      size: "text-xs", 
      color: "text-[#ADADB9]", 
      className: "ml-[53px] mt-1 max-md:ml-2.5" 
    },
  ];
  
  const toggleHashtag = (hashtag: string) => {
    setSelectedHashtags(prev => 
      prev.includes(hashtag) 
        ? prev.filter(h => h !== hashtag)
        : [...prev, hashtag]
    );
  };
  
  return (
    <div className="flex w-full flex-col overflow-hidden items-stretch font-semibold whitespace-nowrap leading-none mt-3 pt-4 pb-[25px]">
      {/* First row */}
      <div className={hashtags[0].className}>
        <span 
          className={`${hashtags[0].color} ${hashtags[0].size} cursor-pointer px-2 py-1 rounded-md transition-all duration-200 ${
            selectedHashtags.includes(hashtags[0].text) 
              ? "bg-gray-100 shadow-sm" 
              : ""
          } ${
            hoveredHashtag === hashtags[0].text 
              ? "scale-110" 
              : ""
          }`}
          onClick={() => toggleHashtag(hashtags[0].text)}
          onMouseEnter={() => setHoveredHashtag(hashtags[0].text)}
          onMouseLeave={() => setHoveredHashtag(null)}
        >
          {hashtags[0].text}
        </span>
      </div>
      
      {/* Second row */}
      <div className="flex w-full flex-col items-stretch mt-1.5 pl-3.5 pr-[33px] max-md:pr-5">
        <div className={hashtags[1].className}>
          <span 
            className={`${hashtags[1].color} ${hashtags[1].size} cursor-pointer px-2 py-1 rounded-md transition-all duration-200 ${
              selectedHashtags.includes(hashtags[1].text) 
                ? "bg-gray-100 shadow-sm" 
                : ""
            } ${
              hoveredHashtag === hashtags[1].text 
                ? "scale-110" 
                : ""
            }`}
            onClick={() => toggleHashtag(hashtags[1].text)}
            onMouseEnter={() => setHoveredHashtag(hashtags[1].text)}
            onMouseLeave={() => setHoveredHashtag(null)}
          >
            {hashtags[1].text}
          </span>
        </div>
        
        {/* Third row */}
        <div className="flex items-stretch gap-[30px] mt-1.5">
          <div className={hashtags[2].className}>
            <span 
              className={`${hashtags[2].color} ${hashtags[2].size} cursor-pointer px-2 py-1 rounded-md transition-all duration-200 ${
                selectedHashtags.includes(hashtags[2].text) 
                  ? "bg-gray-100 shadow-sm" 
                  : ""
              } ${
                hoveredHashtag === hashtags[2].text 
                  ? "scale-110" 
                  : ""
              }`}
              onClick={() => toggleHashtag(hashtags[2].text)}
              onMouseEnter={() => setHoveredHashtag(hashtags[2].text)}
              onMouseLeave={() => setHoveredHashtag(null)}
            >
              {hashtags[2].text}
            </span>
          </div>
          <div className={hashtags[3].className}>
            <span 
              className={`${hashtags[3].color} ${hashtags[3].size} cursor-pointer px-2 py-1 rounded-md transition-all duration-200 ${
                selectedHashtags.includes(hashtags[3].text) 
                  ? "bg-gray-100 shadow-sm" 
                  : ""
              } ${
                hoveredHashtag === hashtags[3].text 
                  ? "scale-110" 
                  : ""
              }`}
              onClick={() => toggleHashtag(hashtags[3].text)}
              onMouseEnter={() => setHoveredHashtag(hashtags[3].text)}
              onMouseLeave={() => setHoveredHashtag(null)}
            >
              {hashtags[3].text}
            </span>
          </div>
        </div>
        
        {/* Fourth row */}
        <div className={hashtags[4].className}>
          <span 
            className={`${hashtags[4].color} ${hashtags[4].size} cursor-pointer px-2 py-1 rounded-md transition-all duration-200 ${
              selectedHashtags.includes(hashtags[4].text) 
                ? "bg-gray-100 shadow-sm" 
                : ""
            } ${
              hoveredHashtag === hashtags[4].text 
                ? "scale-110" 
                : ""
            }`}
            onClick={() => toggleHashtag(hashtags[4].text)}
            onMouseEnter={() => setHoveredHashtag(hashtags[4].text)}
            onMouseLeave={() => setHoveredHashtag(null)}
          >
            {hashtags[4].text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HashtagCloud;
