import { HeroCss } from './styles'
import hero from '../../assets/image/hero.png'

const Hero = () => (
  <HeroCss style={{ backgroundImage: `url(${hero})` }}>
    <div className="container">
      <h4>Italiana</h4>
      <strong>La Dolce Vita Trattoria</strong>
    </div>
  </HeroCss>
)

export default Hero
