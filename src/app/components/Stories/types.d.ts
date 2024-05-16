interface StoriesProps{
  stories: prismic.SliceZone<StoriesSlice>
  isOpened: boolean
  toggle: () => void
}