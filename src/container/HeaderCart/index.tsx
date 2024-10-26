import { Header, HeaderImage, LinkCart } from './styles'

import fundoHeader from '../../assets/image/fundo.png'
import logo from '../../assets/image/logo.png'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const HeaderCart = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderImage style={{ backgroundImage: `url(${fundoHeader})` }}>
      <Header className="container">
        <h3>
          <span>Restaurante</span>
        </h3>

        <Link to="/">
          <img src={logo} alt="logo efood" />
        </Link>

        <LinkCart onClick={openCart}>
          {items.length} produto(s) no carrinho
        </LinkCart>
      </Header>
    </HeaderImage>
  )
}

export default HeaderCart
