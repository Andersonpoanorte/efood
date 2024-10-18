import { ButtonCard, ButtonMenu } from './styles'

type Props = {
  children: string
  to?: string
  title: string
}

const CardButton = ({ children, title, to }: Props) => (
  <ButtonCard to={to as string} title={title}>
    {children}
  </ButtonCard>
)

export const MenuButton = ({ children, title }: Props) => (
  <ButtonMenu title={title}>{children}</ButtonMenu>
)

export default CardButton
