import { TagCard } from './styles'

type Props = {
  children: string
}

const Tag = ({ children }: Props) => <TagCard>{children}</TagCard>

export default Tag
