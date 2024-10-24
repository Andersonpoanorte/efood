import { HeroCss } from './styles'

type Props = {
  image: string
  type: string
  titulo: string
}

const Hero = ({ image, type, titulo }: Props) => {
  const capitalizeInitial = (palavra: string) => {
    return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()
  }
  return (
    <HeroCss style={{ backgroundImage: `url(${image})` }}>
      <div className="container">
        <h4>{capitalizeInitial(type)}</h4>
        <strong>{titulo}</strong>
      </div>
    </HeroCss>
  )
}

export default Hero
