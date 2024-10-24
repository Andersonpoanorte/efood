import Card from '../../components/Card'
import { Efood } from '../../models/cardapio'
import { MainCss } from './styles'

export type Props = {
  efood: Efood[]
}

const Main = ({ efood }: Props) => {
  function getTagsFromData(restaurante: Efood) {
    const tags = []
    if (restaurante.destacado) tags.push('Destaque da semana')
    tags.push(restaurante.tipo)
    return tags
  }
  return (
    <MainCss>
      <div>
        <ul>
          {efood.map((food) => (
            <Card
              key={food.id}
              title={food.titulo}
              describe={food.descricao}
              image={food.capa}
              tags={getTagsFromData(food)}
              score={food.avaliacao}
              id={food.id}
            />
          ))}
        </ul>
      </div>
    </MainCss>
  )
}

export default Main
