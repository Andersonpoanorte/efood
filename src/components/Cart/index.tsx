import { MenuButton } from '../Button'
import {
  AddIem,
  ButtonMore,
  CartContainer,
  CartItem,
  Overlay,
  Price,
  Quantity,
  QuantityButton,
  Sidebar
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove, addMore, removeOne } from '../../store/reducers/cart'
import { formataPreco } from '../../utils'

const Cart = () => {
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

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

  const quantityCart = items.reduce((accumulator, itemsToCheck) => {
    return (accumulator += itemsToCheck.quantidade!)
  }, 0)

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={() => closeCart()} />
      <Sidebar>
        <ul>
          {items.map((i) => (
            <CartItem key={i.id}>
              <img src={i.foto} alt={i.nome} />
              <div>
                <h3>{i.nome}</h3>
                <span>{formataPreco(i.preco)}</span>
                <AddIem>
                  <span>Quantidade: {i.quantidade}</span>
                  <ButtonMore onClick={() => dispatch(addMore(i.id))}>
                    +
                  </ButtonMore>
                  <ButtonMore onClick={() => dispatch(removeOne(i.id))}>
                    -
                  </ButtonMore>
                </AddIem>
              </div>
              <button type="button" onClick={() => removeItem(i.id)}></button>
            </CartItem>
          ))}
        </ul>
        <Quantity> {quantityCart} item(s) no carrinho</Quantity>
        <Price>
          <p>Valor total</p>
          <p>{formataPreco(getTotalPrice())}</p>
        </Price>
        <span></span>
        <MenuButton title="Clique aqui para continuar a compra">
          Continuar com a entrega
        </MenuButton>
      </Sidebar>
    </CartContainer>
  )
}
export default Cart
