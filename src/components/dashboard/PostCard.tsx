import React from "react";

interface PostCardProps {
  type: "Short" | "Post" | "Reel" | "Video";
  image: string;
  likes: string;
  comments: string;
  views?: string;
  engagementRate: string;
  estimatedReach?: string;
  profileImage: string;
  username: string;
  followers: string;
  content: string;
  hashtags?: string;
  timestamp: string;
}

const PostCard: React.FC<PostCardProps> = ({
  type,
  image,
  likes,
  comments,
  views,
  engagementRate,
  estimatedReach,
  profileImage,
  username,
  followers,
  content,
  hashtags,
  timestamp,
}) => {
  // Helper function to get the icon based on post type
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Short":
        return "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/79b681e77634ec0f145272fb3360b06c3356c5acaf5aebcb121eee5ac77c9905?placeholderIfAbsent=true";
      case "Post":
        return "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/3cf5159bd6c154945918c12de6f4b87d6fc15ddd44ae8fe58909545a45b0b56f?placeholderIfAbsent=true";
      case "Reel":
        return "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/15139dd67343ba7861944cc5b9bdcb81a4a69d1e802cff87c32339120401051e?placeholderIfAbsent=true";
      case "Video":
        return "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/3c04513a168025ed6b8bbc04d9e390c31dbbff693240d7fbb4b150814aac83a7?placeholderIfAbsent=true";
      default:
        return "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/79b681e77634ec0f145272fb3360b06c3356c5acaf5aebcb121eee5ac77c9905?placeholderIfAbsent=true";
    }
  };

  return (
    <article className="border border-[color:var(--grey-borders,#E0E0E5)] shadow-[0px_1px_12px_0px_rgba(8,26,130,0.06)] bg-white min-w-60 overflow-hidden grow shrink w-[262px] rounded-2xl border-solid">
      <div className="max-w-full w-[328px] overflow-hidden">
        <div className="flex flex-col relative aspect-[1.262] w-full pt-4">
          <img
            src={image}
            className="absolute h-full w-full object-cover inset-0"
            alt="Post content"
          />
          <div className="relative flex items-stretch gap-5 whitespace-nowrap justify-between mx-4 max-md:mx-2.5">
            {(type === "Short" || type === "Video") && (
              <div className="flex items-center gap-2 text-base text-white font-normal text-center justify-center p-2 rounded-[1000px]">
                <div className="self-stretch w-5 h-5 my-auto">
                  photo-film-music
                </div>
              </div>
            )}
            <div className="items-center border border-[color:var(--grey-borders,#E0E0E5)] bg-white flex min-h-6 gap-1 text-sm text-[#33334F] font-medium leading-none px-2 rounded-[100px] border-solid ml-auto">
              <img
                src={getTypeIcon(type)}
                className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                alt={type}
              />
              <div className="self-stretch my-auto">{type}</div>
            </div>
          </div>
          <div className="relative bg-[rgba(255,255,255,0.8)] w-full text-center mt-[115px] p-2 max-md:mt-10">
            <div className="flex w-full gap-2 whitespace-nowrap">
              <div className="flex-1 shrink basis-[0%]">
                <div className="text-[#33334F] text-sm font-semibold leading-none">
                  {likes}
                </div>
                <div className="text-[#707084] text-[10px] font-normal leading-[1.4] uppercase">
                  Likes
                </div>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/8f6c558dfa8a4b43e70ea957a2e9b589bca1c514be470b5a1eee7fb50975e006?placeholderIfAbsent=true"
                className="aspect-[0.03] object-contain w-0 self-stretch stroke-[1px] stroke-white shrink-0"
                alt="Divider"
              />
              <div className="flex-1 shrink basis-[0%]">
                <div className="text-[#33334F] text-sm font-semibold leading-none">
                  {comments}
                </div>
                <div className="text-[#707084] text-[10px] font-normal leading-[1.4] uppercase">
                  Comments
                </div>
              </div>
              {views && (
                <>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/4418b06f17b873845cacc6df802bda3866531d7402fb994c85d060fbbf9fb2c9?placeholderIfAbsent=true"
                    className="aspect-[0.03] object-contain w-0 self-stretch stroke-[1px] stroke-white shrink-0"
                    alt="Divider"
                  />
                  <div className="flex-1 shrink basis-[0%]">
                    <div className="text-[#33334F] text-sm font-semibold leading-none">
                      {views}
                    </div>
                    <div className="text-[#707084] text-[10px] font-normal leading-[1.4] uppercase">
                      Views
                    </div>
                  </div>
                </>
              )}
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/24ed3c078cb1d4e98d78e34de95cfa865e22bcabd98213f0c3919be8359a0a4f?placeholderIfAbsent=true"
              className="aspect-[333.33] object-contain w-full stroke-[1px] stroke-white mt-1"
              alt="Divider"
            />
            <div className="flex w-full gap-2 mt-1">
              {views ? (
                <>
                  <div className="flex-1 shrink basis-[0%]">
                    <div className="text-[#33334F] text-sm font-semibold leading-none">
                      {engagementRate}
                    </div>
                    <div className="text-[#707084] text-[10px] font-normal leading-[1.4] uppercase">
                      Engagement rate
                    </div>
                  </div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/8f6c558dfa8a4b43e70ea957a2e9b589bca1c514be470b5a1eee7fb50975e006?placeholderIfAbsent=true"
                    className="aspect-[0.03] object-contain w-0 self-stretch stroke-[1px] stroke-white shrink-0"
                    alt="Divider"
                  />
                  <div className="flex-1 shrink basis-[0%]">
                    <div className="text-[#33334F] text-sm font-semibold leading-none">
                      {estimatedReach}
                    </div>
                    <div className="text-[#707084] text-[10px] font-normal leading-[1.4] uppercase">
                      Estimated Reach
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="whitespace-nowrap flex-1 shrink basis-[0%]">
                    <div className="text-[#33334F] text-sm font-semibold leading-none">
                      {views || "3,243"}
                    </div>
                    <div className="text-[#707084] text-[10px] font-normal leading-[1.4] uppercase">
                      Views
                    </div>
                  </div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/8f6c558dfa8a4b43e70ea957a2e9b589bca1c514be470b5a1eee7fb50975e006?placeholderIfAbsent=true"
                    className="aspect-[0.03] object-contain w-0 self-stretch stroke-[1px] stroke-white shrink-0"
                    alt="Divider"
                  />
                  <div className="flex-1 shrink basis-[0%]">
                    <div className="text-[#33334F] text-sm font-semibold leading-none">
                      {engagementRate}
                    </div>
                    <div className="text-[#707084] text-[10px] font-normal leading-[1.4] uppercase">
                      Engagement rate
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="border border-[color:var(--grey-borders,#E0E0E5)] bg-white w-full pt-4 pb-6 px-4 rounded-[0px_0px_16px_16px] border-solid">
        <div className="w-full">
          <div className="flex min-h-10 w-full gap-2.5">
            <img
              src={profileImage}
              className="aspect-[1] object-contain w-10 shrink-0 rounded-[1000px]"
              alt={username}
            />
            <div className="min-w-60 flex-1 shrink basis-[0%]">
              <div className="text-[#33334F] text-base font-semibold leading-none">
                {username}
              </div>
              <div className="text-[#707084] text-sm font-normal leading-none mt-1">
                {followers}
              </div>
            </div>
          </div>
          <div className="text-[#33334F] text-ellipsis whitespace-nowrap text-sm font-normal leading-5 mt-2">
            <span className="text-[#33334F]">Lorem ipsum dolor sit amet. </span>
            {content}
          </div>
          {hashtags && (
            <div className="text-[#33334F] text-ellipsis whitespace-nowrap text-sm font-medium leading-none mt-2">
              {hashtags}
            </div>
          )}
          <div className="text-[#707084] text-sm font-normal leading-none mt-2">
            {timestamp}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
