import {
  CartContainer,
  CartItem,
  GoToCheckoutButton,
  Overlay,
  Price,
  Quantity,
  Sidebar
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove, toggleCheckout } from '../../store/reducers/cart'
import { formataPreco } from '../../utils'
import Checkout from '../Checkout'

const Cart = () => {
  const dispatch = useDispatch()
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)
  const { isCheckout } = useSelector((state: RootReducer) => state.cart)

  const isDisabled = items.length === 0

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={() => closeCart()} />
      <Sidebar>
        {!isCheckout ? (
          <>
            <ul>
              {items.map((i) => (
                <CartItem key={i.id}>
                  <img src={i.foto} alt={i.nome} />
                  <div>
                    <h3>{i.nome}</h3>
                    <span>{formataPreco(i.preco)}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(i.id)}
                  ></button>
                </CartItem>
              ))}
            </ul>
            <Quantity> {items.length} item(s) no carrinho</Quantity>
            <Price>
              <p>Valor total</p>
              <p>{formataPreco(getTotalPrice())}</p>
            </Price>
            <span></span>
            <GoToCheckoutButton
              title="Clique aqui para continuar a compra"
              className={isDisabled ? 'disabled' : ''}
              disabled={isDisabled}
              onClick={() => {
                dispatch(toggleCheckout())
              }}
            >
              Continuar com a entrega
            </GoToCheckoutButton>
          </>
        ) : (
          <>
            <Checkout />
          </>
        )}
      </Sidebar>
    </CartContainer>
  )
}
export default Cart
