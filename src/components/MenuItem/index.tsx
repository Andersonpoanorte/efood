import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Modal from '../Modal'
import {
  Button,
  CardapioContainer,
  Container,
  ModalContent,
  ModalCss
} from './styles'

import close from '../../assets/image/close_1.png'
import { getDescricao } from '../Card'

interface ECardapio {
  id: number
  foto: string
  nome: string
  descricao: string
  preco: number
  porcao: string
}
interface modalState extends ECardapio {
  isVisible: boolean
}

const MenuItem = () => {
  const [menuList, setMenuList] = useState<ECardapio[]>([])
  const [modal, setModal] = useState<modalState>({
    isVisible: false,
    id: 1,
    foto: '',
    nome: '',
    descricao: '',
    porcao: '',
    preco: 0
  })
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setMenuList(res.cardapio))
  }, [id])

  if (id === undefined) {
    return null
  }

  const fecharModal = () => {
    setModal({
      isVisible: false,
      id: modal.id,
      foto: modal.foto,
      nome: modal.nome,
      descricao: modal.descricao,
      porcao: modal.porcao,
      preco: modal.preco
    })
  }

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <Container>
      <CardapioContainer className="container">
        {menuList.map((menu) => (
          <Modal
            onClick={() =>
              setModal({
                id: menu.id,
                nome: menu.nome,
                descricao: menu.descricao,
                foto: menu.foto,
                porcao: menu.porcao,
                preco: menu.preco,
                isVisible: true
              })
            }
            key={menu.id}
            image={menu.foto}
            title={menu.nome}
            description={getDescricao(menu.descricao)}
          />
        ))}
      </CardapioContainer>
      <ModalCss
        className={modal.isVisible ? ' container isVisible' : 'container'}
      >
        <ModalContent>
          <img src={modal.foto} />
          <div>
            <h1>{modal.nome}</h1>
            <p>
              {modal.descricao} <br /> <br />
              {modal.porcao.includes('1 pessoa')
                ? 'Serve: 1 pessoa'
                : `Serve: de ${modal.porcao}`}
            </p>
            <Button>Adicionar ao carrinho - {formataPreco(modal.preco)}</Button>
          </div>
          <img
            src={close}
            alt="'icone de fechar a modal"
            onClick={() => fecharModal()}
          />
        </ModalContent>
      </ModalCss>
      <div
        onClick={() => fecharModal()}
        className={modal.isVisible ? 'overlay isVisible' : ' overlay'}
      ></div>
    </Container>
  )
}

export default MenuItem
