import { PropagateLoader } from 'react-spinners'
import { cores } from '../../styles'
import { Container } from './styles'

export const Loader = () => (
  <Container>
    <PropagateLoader color={cores.begeClaro} />
  </Container>
)
