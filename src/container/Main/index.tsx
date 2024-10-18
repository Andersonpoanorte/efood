import Card from '../../components/Card'
import { MainCss } from './styles'

import Efood from '../../models/Efood'

export type Props = {
  efood: Efood[]
}

const Main = ({ efood }: Props) => (
  <MainCss>
    <div>
      <ul>
        {efood.map((food) => (
          <Card
            key={food.id}
            title={food.title}
            describe={food.describe}
            image={food.image}
            tags={food.tags}
            score={food.score}
          />
        ))}
      </ul>
    </div>
  </MainCss>
)

export default Main
