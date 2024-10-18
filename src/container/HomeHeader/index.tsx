import { Header, HeaderImage } from './styles'

import fundoHeader from '../../assets/image/fundo.png'
import logo from '../../assets/image/logo.png'

export const HomeHeader = () => (
  <HeaderImage style={{ backgroundImage: `url(${fundoHeader})` }}>
    <Header className="container">
      <a href="">
        <img src={logo} alt="logo efood" />
      </a>
      <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
    </Header>
  </HeaderImage>
)

export default HomeHeader
