
import React from "react";
import Header from "./Header";
import FilterPanel from "./FilterPanel";
import ContentTabs from "./ContentTabs";
import PostCard from "./PostCard";
import AnalyticsWidget from "./AnalyticsWidget";
import HashtagCloud from "./HashtagCloud";
import KeywordCloud from "./KeywordCloud";

const Dashboard: React.FC = () => {
  // Sample data for post cards
  const posts = [
    {
      type: "Short" as const,
      image:
        "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/704857094f562abe9e4edcfaa2fdf04cd9a6dc0af161b0c9fa05c00b0248ef5c?placeholderIfAbsent=true",
      likes: "23,432",
      comments: "739",
      views: "3,243",
      engagementRate: "24%",
      profileImage:
        "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/cda2366179c3e2c4d348ca43873b10c476572d556eb42f5ae5bb34631eb6582d?placeholderIfAbsent=true",
      username: "@Johnny Doe",
      followers: "127k followers",
      content:
        "In nulla in amet consectetur leo in nibh placerat. landit sapien eu eros sed #Maggimania landit landit",
      hashtags: "#skincare #haircare #morningroutine #vitaminC",
      timestamp: "May 4, 2024 at 2:04 PM",
    },
    {
      type: "Post" as const,
      image:
        "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/7461fa69976abe142d19be5643f7c394f9cb443e2a7d2f28a45c714d7de357c7?placeholderIfAbsent=true",
      likes: "23,432",
      comments: "739",
      engagementRate: "24%",
      estimatedReach: "33,432",
      profileImage:
        "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/e8c3c1fb2c160e5ea2abf680a96981e183ef98cb0615dd9c91d489fa0af5ff87?placeholderIfAbsent=true",
      username: "@Johnny Doe",
      followers: "127k followers",
      content:
        "In nulla in amet consectetur leo in nibh placerat. landit sapien eu eros sed #Maggimania landit landit",
      hashtags: "#skincare #haircare #morningroutine #vitaminC",
      timestamp: "May 4, 2024 at 2:04 PM",
    },
    {
      type: "Reel" as const,
      image:
        "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/ef00305d50388d6ce6b2ba96a75e08e733e20d4e4cdd8c7e065269b26d037edd?placeholderIfAbsent=true",
      likes: "23,432",
      comments: "739",
      views: "17,390",
      engagementRate: "24%",
      estimatedReach: "33,432",
      profileImage:
        "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/1d56a1ec6606b91393e94f07981895b6794819f7354852d76bf34b671d851c68?placeholderIfAbsent=true",
      username: "@Johnny Doe",
      followers: "127k followers",
      content:
        "In nulla in amet consectetur leo in nibh placerat. landit sapien eu eros sed #Maggimania landit landit",
      timestamp: "May 4, 2024 at 2:04 PM",
    },
    {
      type: "Video" as const,
      image:
        "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/7dac2249d2c2fb14a591c156eedba0ef07ad5c3b601664d8192c32650e087fb1?placeholderIfAbsent=true",
      likes: "23,432",
      comments: "739",
      views: "3,243",
      engagementRate: "24%",
      profileImage:
        "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/a9bb18eb87e06b642d6e0f8c947781443a4bfedbd23363565251b1e8e3481841?placeholderIfAbsent=true",
      username: "@Johnny Doe",
      followers: "127k followers",
      content:
        "In nulla in amet consectetur leo in nibh placerat. landit sapien eu eros sed #Maggimania landit landit",
      timestamp: "May 4, 2024 at 2:04 PM",
    },
  ];

  return (
    <div className="bg-[#F8F9FF] overflow-hidden min-h-screen">
      <Header />
      <div className="flex flex-wrap">
        {/* Left Section: Filters */}
        <div className="w-[300px] shrink-0">
          <FilterPanel />
        </div>
        
        {/* Center Section: Content */}
        <div className="flex-1">
          <ContentTabs>
            <div className="flex flex-wrap gap-6 mt-6">
              {/* Posts grid */}
              <div className="flex-1 min-w-[600px]">
                <div className="flex w-full gap-5 flex-wrap">
                  {posts.map((post, index) => (
                    <PostCard key={index} {...post} />
                  ))}
                </div>
              </div>
              
              {/* Right Section: Analytics Widgets */}
              <div className="shadow-[0px_1px_12px_0px_rgba(8,26,130,0.06)] min-w-[326px] w-[326px]">
                <AnalyticsWidget
                  title={
                    <>
                      Top Hashtags being talked in{" "}
                      <span className="font-semibold">
                        All Top Trending Content
                      </span>
                    </>
                  }
                  icon="#️⃣"
                  actionIcon="https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/10960da1a48ea313f98cdd3c02bc47b557a9ea1d19b60b43e51cc9e052dbebc0?placeholderIfAbsent=true"
                >
                  <HashtagCloud />
                </AnalyticsWidget>

                <AnalyticsWidget
                  title={
                    <>
                      Top Keywords being talked in{" "}
                      <span className="font-semibold">
                        All Top Trending Content
                      </span>
                    </>
                  }
                  icon="🔑"
                  actionIcon="https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/485cfccd869ec978c73ab74fc6e8aae8295066d431360c608554c0ab03d44b80?placeholderIfAbsent=true"
                  timePeriod="Apr 25 to May 24"
                  className="mt-6"
                >
                  <KeywordCloud />
                </AnalyticsWidget>

                <div className="max-w-full w-[326px] mt-6">
                  <AnalyticsWidget
                    title={
                      <>
                        SoV of{" "}
                        <span className="font-semibold">
                          Brands, Products, Issues, Ingredients, Benefits and
                          Consideration Factors
                        </span>{" "}
                        being talked in{" "}
                        <span className="font-semibold">
                          All Top Trending Content
                        </span>
                      </>
                    }
                    icon="📊"
                    infoIcon="info_outline"
                  >
                    <div className="bg-white w-full px-4">
                      <div className="flex min-h-1.5 w-full pt-2 rounded-2xl" />
                    </div>
                  </AnalyticsWidget>
                </div>
              </div>
            </div>
          </ContentTabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
