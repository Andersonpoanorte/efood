import CardButton from '../Button'
import Tag from '../Tag'
import { CardItem, CardProduct, CardTag, CardTitle, Score } from './styles'

import estrela from '../../assets/image/estrela.png'

export type Props = {
  title: string
  describe: string
  image: string
  tags: string[]
  score: number
}

const Card = ({ title, describe, image, tags, score }: Props) => (
  <CardProduct>
    <img src={image} alt={title} />
    <CardTag>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </CardTag>
    <CardItem>
      <CardTitle>
        <h3>{title}</h3>
        <Score>
          <h3>{score}</h3>
          <img src={estrela} alt="" />
        </Score>
      </CardTitle>

      <p>{describe}</p>
      <CardButton
        to={'/cardapio'}
        title="Clique aqui e saiba mais sobre o Prato"
      >
        Saiba mais
      </CardButton>
    </CardItem>
  </CardProduct>
)

export default Card
