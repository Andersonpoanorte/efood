import { useParams } from 'react-router-dom'
import { useGetHeroQuery } from '../../services/api'
import { HeroCss } from './styles'

const Hero = () => {
  const { id } = useParams()

  const { data: hero } = useGetHeroQuery(id!)

  const capitalizeInitial = (palavra: string) => {
    return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()
  }

  return (
    <HeroCss style={{ backgroundImage: `url(${hero?.capa})` }}>
      <div className="container">
        <h4>{hero?.tipo}</h4>
        <strong>{hero?.titulo}</strong>
      </div>
    </HeroCss>
  )
}

export default Hero
