type Tab = "feed" | "experiências" | "conteúdo"

interface TabsProps{
  feed: prismic.SliceZone<FeedPostSlice>
  experiences: prismic.SliceZone<ExperiencesSlice>
  content: prismic.SliceZone<ContentSlice>
}