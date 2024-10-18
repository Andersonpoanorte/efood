import { MenuButton } from '../Button'
import { MenuCard } from './styles'

export type Props = {
  image: string
  title: string
  describe: string
}

const MenuItem = ({ image, title, describe }: Props) => (
  <div className="container">
    <MenuCard>
      <img src={image} title={title} />
      <h3>{title}</h3>
      <p>{describe}</p>
      <MenuButton to={'/carrinho'} title="Adicione este item ao carrinho">
        Adicionar no carrinho
      </MenuButton>
    </MenuCard>
  </div>
)

export default MenuItem
