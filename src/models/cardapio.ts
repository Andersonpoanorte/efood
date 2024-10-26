export type Efood = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: []
}

export type ECardapio = {
  id: number
  foto: string
  nome: string
  descricao: string
  preco: number
  porcao: string
  quantidade?: number
}
