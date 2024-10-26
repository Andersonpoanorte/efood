import {
  AddToCartButton,
  Card,
  CloseButton,
  ContentContainer,
  Description,
  Modal,
  ProductInfo,
  Title
} from './styles'

import { ECardapio } from '../../models/cardapio'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { formataPreco, getDescricao } from '../../utils'
import { useState } from 'react'

type Props = {
  listMenu: ECardapio
}

const MenuItem = ({ listMenu }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const dispath = useDispatch()
  const addToCart = () => {
    dispath(add(listMenu))
    dispath(open())
  }

  return (
    <Card>
      <img src={listMenu.foto} alt={listMenu.nome} />
      <ContentContainer>
        <Title>{listMenu.nome}</Title>
        <Description> {getDescricao(`${listMenu.descricao}`)}</Description>
        <AddToCartButton onClick={() => setIsOpen(true)}>
          Adicionar ao Carrinho
        </AddToCartButton>
      </ContentContainer>
      <Modal className={isOpen ? 'visible' : ''}>
        <div className="container">
          <CloseButton src={CloseButton} onClick={() => setIsOpen(false)} />
          <img src={listMenu.foto} alt={listMenu.nome} />
          <ProductInfo>
            <h3>{listMenu.nome}</h3>
            <p>{listMenu.descricao}</p>
            <p>Serve: de {listMenu.porcao}</p>
            <AddToCartButton onClick={addToCart}>
              Adicionar ao carrinho - {formataPreco(listMenu.preco)}
            </AddToCartButton>
          </ProductInfo>
        </div>
        <div className="overlay" onClick={() => setIsOpen(false)} />
      </Modal>
    </Card>
  )
}

export default MenuItem
