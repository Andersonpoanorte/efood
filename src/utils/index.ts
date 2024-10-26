export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getDescricao = (descricao: string) => {
  if (descricao.length > 95) {
    return descricao.slice(0, 92) + '...'
  }
  return descricao
}
