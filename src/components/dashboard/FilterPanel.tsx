
import React, { useState } from "react";

const FilterPanel: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState({
    country: false,
    presetKeyword: true,
    customKeyword: false,
    postType: false,
    influencerScale: false,
    organicOrAd: false,
    engagementRate: false,
    timePeriod: false,
  });

  const [selectedPresetKeywords, setSelectedPresetKeywords] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedPostTypes, setSelectedPostTypes] = useState<string[]>([]);
  
  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  
  const togglePresetKeyword = (keyword: string) => {
    setSelectedPresetKeywords((prev) => 
      prev.includes(keyword) 
        ? prev.filter(k => k !== keyword)
        : [...prev, keyword]
    );
  };
  
  const toggleCountry = (country: string) => {
    setSelectedCountries((prev) => 
      prev.includes(country) 
        ? prev.filter(c => c !== country)
        : [...prev, country]
    );
  };
  
  const togglePostType = (type: string) => {
    setSelectedPostTypes((prev) => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };
  
  const countries = ["India", "United States", "United Kingdom", "Australia", "Canada"];
  const postTypes = ["Post", "Reel", "Video", "Short"];

  const presetKeywordsList = [
    "All Brands",
    "All Products",
    "All Issues",
    "All Ingredients",
    "All Benefits",
    "All Consideration Factors",
  ];

  return (
    <div className="shadow-[0px_3px_32px_0px_rgba(8,26,130,0.09)] bg-white p-6 h-full max-md:px-5">
      <div className="w-full text-xl text-[#33334F] font-semibold leading-[1.4]">
        <div className="self-stretch flex-1 shrink basis-[0%] min-h-10 w-full gap-3">
          Filter By
        </div>
      </div>
      <div className="border bg-[#EBEBED] min-h-0 w-full mt-5 border-[rgba(235,235,237,1)] border-solid" />

      {/* Country Section */}
      <div className="w-full text-base text-[#707084] font-medium whitespace-nowrap mt-5">
        <div
          className="flex w-full items-center gap-2 cursor-pointer"
          onClick={() => toggleSection("country")}
        >
          <div className="self-stretch flex-1 shrink basis-[0%] gap-2 my-auto">
            Country
          </div>
          <img
            src={expandedSections.country 
              ? "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/7b26edea3d3ab62f5912cabfcd6813f917165802c082f5ba02c52a76a94825e5?placeholderIfAbsent=true" 
              : "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/cc64f71517a14bf532b0501224365ab07767ce2f034b3142f704d11e9b76ce96?placeholderIfAbsent=true"}
            className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            alt="Toggle country"
          />
        </div>
      </div>
      
      {expandedSections.country && (
        <div className="w-full text-sm text-[#33334F] font-normal leading-none mt-4">
          <div className="items-center border border-[color:var(--grey-borders,#E0E0E5)] bg-white flex min-h-10 w-full gap-2 text-[#9999A7] whitespace-nowrap px-4 py-2.5 rounded-[100px] border-solid">
            <input
              type="text"
              placeholder="Search countries..."
              className="self-stretch flex-1 shrink basis-[0%] my-auto bg-transparent outline-none"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/80a7c4414301ade7b4424c347ceb4b14c3722e4fd09efee02401e39e03a8b1bb?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              alt="Search"
            />
          </div>

          {countries.map((country, index) => (
            <div key={index} className="flex w-full items-center gap-3 mt-3">
              <label className="flex items-center gap-3 cursor-pointer w-full">
                <input 
                  type="checkbox" 
                  className="hidden" 
                  checked={selectedCountries.includes(country)}
                  onChange={() => toggleCountry(country)}
                />
                <img
                  src={selectedCountries.includes(country) 
                    ? "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/51f462b6a44f2fcdce1d14bb0a71c04e2c3fc554a3b1b5034f202a0551482566?placeholderIfAbsent=true" 
                    : "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/92b798ae21e08119df872c755cc495e595126d2e3c735aec808b5e0af5c39669?placeholderIfAbsent=true"}
                  className="aspect-[1] object-contain w-6 shrink-0"
                  alt="Checkbox"
                />
                <div className="flex flex-col items-stretch justify-center flex-1 shrink basis-[0%] pt-0.5">
                  <div className="flex-1 shrink basis-[0%] w-full gap-2">
                    {country}
                  </div>
                </div>
              </label>
            </div>
          ))}
        </div>
      )}
      
      <div className="border bg-[#EBEBED] min-h-0 w-full mt-5 border-[rgba(235,235,237,1)] border-solid" />

      {/* Preset Keyword Filter Section */}
      <div className="w-full mt-5">
        <div className="flex w-full text-base text-[#707084] font-medium justify-between">
          <div
            className="flex min-w-60 w-full items-center gap-2 flex-1 shrink basis-[0%] cursor-pointer"
            onClick={() => toggleSection("presetKeyword")}
          >
            <div className="self-stretch flex-1 shrink basis-[0%] my-auto">
              Preset Keyword Filter
            </div>
            <img
              src={expandedSections.presetKeyword 
                ? "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/7b26edea3d3ab62f5912cabfcd6813f917165802c082f5ba02c52a76a94825e5?placeholderIfAbsent=true" 
                : "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/cc64f71517a14bf532b0501224365ab07767ce2f034b3142f704d11e9b76ce96?placeholderIfAbsent=true"}
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              alt="Toggle preset keyword"
            />
          </div>
        </div>

        {expandedSections.presetKeyword && (
          <div className="w-full text-sm text-[#33334F] font-normal leading-none mt-4">
            <div className="items-center border border-[color:var(--grey-borders,#E0E0E5)] bg-white flex min-h-10 w-full gap-2 text-[#9999A7] whitespace-nowrap px-4 py-2.5 rounded-[100px] border-solid">
              <input
                type="text"
                placeholder="Search..."
                className="self-stretch flex-1 shrink basis-[0%] my-auto bg-transparent outline-none"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/80a7c4414301ade7b4424c347ceb4b14c3722e4fd09efee02401e39e03a8b1bb?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                alt="Search"
              />
            </div>

            {presetKeywordsList.map((item, index) => (
              <div key={index} className="flex w-full items-center gap-1 mt-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/ba62f2851372dc6dcbe85efc6fc98e4dfa5e870326656afbb31cc8f841da19c3?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                  alt="Expand"
                />
                <div className="self-stretch flex gap-3 flex-1 shrink basis-[0%] my-auto">
                  <label className="flex items-center gap-3 cursor-pointer w-full">
                    <input 
                      type="checkbox" 
                      className="hidden" 
                      checked={selectedPresetKeywords.includes(item)}
                      onChange={() => togglePresetKeyword(item)}
                    />
                    <img
                      src={selectedPresetKeywords.includes(item) 
                        ? "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/51f462b6a44f2fcdce1d14bb0a71c04e2c3fc554a3b1b5034f202a0551482566?placeholderIfAbsent=true" 
                        : "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/92b798ae21e08119df872c755cc495e595126d2e3c735aec808b5e0af5c39669?placeholderIfAbsent=true"}
                      className="aspect-[1] object-contain w-6 shrink-0"
                      alt="Checkbox"
                    />
                    <div className="flex flex-col items-stretch justify-center flex-1 shrink basis-[0%] pt-0.5">
                      <div className="flex-1 shrink basis-[0%] w-full gap-2">
                        {item}
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="border bg-[#EBEBED] min-h-0 w-full mt-5 border-[rgba(235,235,237,1)] border-solid" />

      {/* Custom Keyword Filter Section */}
      <div className="w-full mt-5">
        <div
          className="flex w-full gap-2 text-base text-[#707084] font-medium cursor-pointer"
          onClick={() => toggleSection("customKeyword")}
        >
          <div className="flex-1 shrink basis-[0%] min-w-60 w-full gap-2">
            Custom Keyword Filter
          </div>
          <img
            src={expandedSections.customKeyword 
              ? "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/7b26edea3d3ab62f5912cabfcd6813f917165802c082f5ba02c52a76a94825e5?placeholderIfAbsent=true" 
              : "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/cc64f71517a14bf532b0501224365ab07767ce2f034b3142f704d11e9b76ce96?placeholderIfAbsent=true"}
            className="aspect-[1] object-contain w-6 shrink-0"
            alt="Toggle"
          />
        </div>
        
        {expandedSections.customKeyword && (
          <button className="justify-center items-center border border-[color:var(--brand-blue,#3654FF)] flex min-h-10 w-full gap-2 text-sm text-[#3654FF] font-semibold leading-none mt-5 px-6 rounded-[100px] border-solid max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/fa4744aa295148824ef5e82568f488d8ce611a6ab786bfddff5abd400651248e?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              alt="Add"
            />
            <div className="self-stretch my-auto">Add more</div>
          </button>
        )}
      </div>

      {/* Post Type Section */}
      <div className="border bg-[#EBEBED] min-h-0 w-full mt-5 border-[rgba(235,235,237,1)] border-solid" />
      <div className="w-full text-base text-[#707084] font-medium mt-5">
        <div
          className="flex w-full gap-2 cursor-pointer"
          onClick={() => toggleSection("postType")}
        >
          <div className="self-stretch flex-1 shrink basis-[0%] gap-2 my-auto">
            Post type
          </div>
          <img
            src={expandedSections.postType 
              ? "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/7b26edea3d3ab62f5912cabfcd6813f917165802c082f5ba02c52a76a94825e5?placeholderIfAbsent=true" 
              : "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/a61743329a50f1e6cd270be72504f0eebfbc5c789f92498bce0a376d09285ffd?placeholderIfAbsent=true"}
            className="aspect-[1] object-contain w-6 shrink-0"
            alt="Toggle"
          />
        </div>
        
        {expandedSections.postType && (
          <div className="w-full text-sm text-[#33334F] font-normal leading-none mt-4">
            {postTypes.map((type, index) => (
              <div key={index} className="flex w-full items-center gap-3 mt-3">
                <label className="flex items-center gap-3 cursor-pointer w-full">
                  <input 
                    type="checkbox" 
                    className="hidden" 
                    checked={selectedPostTypes.includes(type)}
                    onChange={() => togglePostType(type)}
                  />
                  <img
                    src={selectedPostTypes.includes(type) 
                      ? "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/51f462b6a44f2fcdce1d14bb0a71c04e2c3fc554a3b1b5034f202a0551482566?placeholderIfAbsent=true" 
                      : "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/92b798ae21e08119df872c755cc495e595126d2e3c735aec808b5e0af5c39669?placeholderIfAbsent=true"}
                    className="aspect-[1] object-contain w-6 shrink-0"
                    alt="Checkbox"
                  />
                  <div className="flex flex-col items-stretch justify-center flex-1 shrink basis-[0%] pt-0.5">
                    <div className="flex-1 shrink basis-[0%] w-full gap-2">
                      {type}
                    </div>
                  </div>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Additional filter sections */}
      {[
        { name: "influencerScale", label: "Influencer Scale" },
        { name: "organicOrAd", label: "Organic or Ad", hasInfo: true },
        { name: "engagementRate", label: "Engagement Rate", hasInfo: true },
        { name: "timePeriod", label: "Time period", hasInfo: true },
      ].map((section, index) => (
        <React.Fragment key={index}>
          <div className="border bg-[#EBEBED] min-h-0 w-full mt-5 border-[rgba(235,235,237,1)] border-solid" />
          <div className="w-full text-base text-[#707084] font-medium mt-5">
            <div
              className="flex w-full gap-2 cursor-pointer"
              onClick={() => toggleSection(section.name)}
            >
              <div
                className={`${section.hasInfo ? "flex items-center gap-2" : "self-stretch"} flex-1 shrink basis-[0%] ${section.hasInfo ? "" : "gap-2"}`}
              >
                <div className="self-stretch my-auto">{section.label}</div>
                {section.hasInfo && (
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/d2b78496c78ef68a5fb8bbde078bea6a435d58f0debafb160e90167519edcb00?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                    alt="Info"
                  />
                )}
              </div>
              <img
                src={expandedSections[section.name] 
                  ? "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/7b26edea3d3ab62f5912cabfcd6813f917165802c082f5ba02c52a76a94825e5?placeholderIfAbsent=true" 
                  : "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/a61743329a50f1e6cd270be72504f0eebfbc5c789f92498bce0a376d09285ffd?placeholderIfAbsent=true"}
                className="aspect-[1] object-contain w-6 shrink-0"
                alt="Toggle"
              />
            </div>
            
            {/* Add expandable content for each section here if needed */}
          </div>
        </React.Fragment>
      ))}

      <div className="border bg-[#EBEBED] min-h-0 w-full mt-5 border-[rgba(235,235,237,1)] border-solid" />
    </div>
  );
};

export default FilterPanel;
