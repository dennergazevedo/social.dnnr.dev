type Tab = "experiences" | "feed"

interface TabsProps{
  feed: prismic.SliceZone<FeedPostSlice>
  experiences: prismic.SliceZone<ExperiencesSlice>
}