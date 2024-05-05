type Tab = "experiences" | "feed" | "content"

interface TabsProps{
  feed: prismic.SliceZone<FeedPostSlice>
  experiences: prismic.SliceZone<ExperiencesSlice>
  content: prismic.SliceZone<ContentSlice>
}