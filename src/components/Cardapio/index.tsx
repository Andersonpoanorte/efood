import { ECardapio } from '../../models/cardapio'
import MenuItem from '../MenuItem'
import { Container } from './styles'

type Props = {
  cardapioItems?: ECardapio[]
}

const Cardapio = ({ cardapioItems }: Props) => (
  <Container>
    {cardapioItems?.map((p) => (
      <MenuItem key={p.id} listMenu={p} />
    ))}
  </Container>
)

export default Cardapio
