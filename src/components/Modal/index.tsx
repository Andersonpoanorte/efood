import { ButtonMenu } from '../Button/styles'
import { Botao, ModalCard, Title } from './styles'

type Props = {
  image: string
  title: string
  description: string
  onClick: () => void
}

const Modal = ({ image, title, description, onClick }: Props) => (
  <ModalCard onClick={onClick} className="container">
    <img src={image} alt={title} />
    <Title>{title}</Title>
    <p>{description}</p>
    <ButtonMenu>Adicionar ao carrinho</ButtonMenu>
  </ModalCard>
)

export default Modal
