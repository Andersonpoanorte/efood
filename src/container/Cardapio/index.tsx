import MenuItem from '../../components/MenuItem'
import { CardapioContainer } from './styles'

import Hero from '../Hero'
import MenuItemList from '../../models/cardapio'

export type Props = {
  menu: MenuItemList[]
}

const Cardapio = ({ menu }: Props) => (
  <>
    <Hero />

    <section className="container">
      <CardapioContainer>
        {menu.map((item) => (
          <MenuItem
            key={item.id}
            image={item.image}
            title={item.title}
            describe={item.describe}
          />
        ))}
      </CardapioContainer>
    </section>
  </>
)

export default Cardapio
