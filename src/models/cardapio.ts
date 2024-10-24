export type Efood = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

export type MenuItemProps = {
  foto: string
  nome: string
  descricao: string
  id: number
  porcao: string
  preco: number
}
