import { Header, HeaderImage } from './styles'

import fundoHeader from '../../assets/image/fundo.png'
import logo from '../../assets/image/logo.png'
import { Link } from 'react-router-dom'

const HeaderCart = () => (
  <HeaderImage style={{ backgroundImage: `url(${fundoHeader})` }}>
    <Header className="container">
      <h3>
        <span>Restaurante</span>
      </h3>

      <Link to="/">
        <img src={logo} alt="logo efood" />
      </Link>

      <h3>
        <span>0 produto(s) no carrinho</span>
      </h3>
    </Header>
  </HeaderImage>
)

export default HeaderCart
