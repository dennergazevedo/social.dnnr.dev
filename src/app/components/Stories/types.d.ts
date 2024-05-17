interface StoriesProps{
  stories: prismic.SliceZone<StoriesSlice>
  isOpened: boolean
  toggle: () => void
  close: () => void
}

interface StoriesProgressProps{
  nextStories: (event: any) => void
  size: number
  currentStorie: number
}