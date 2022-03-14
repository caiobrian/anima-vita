import { Card, CardImage, CardRating, CardTitle } from './styles'

export type PosterImageCardProps = {
  imageUrl: string
  title: string
  rating: string
}

export const PosterImageCard = ({
  imageUrl,
  title,
  rating
}: PosterImageCardProps) => {
  return (
    <Card>
      <CardImage imageUrl={imageUrl} />
      <CardTitle>{title}</CardTitle>
      <CardRating>{parseFloat(rating).toFixed(1)}</CardRating>
    </Card>
  )
}
