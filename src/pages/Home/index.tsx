import HomeHeader from '../../container/HomeHeader'
import Main from '../../container/Main'
import Efood from '../../models/Efood'

import sushi from '../../assets/image/sushi.png'
import massa from '../../assets/image/massa.png'

const food: Efood[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    score: 4.9,
    describe:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    tags: ['destaque da semana', 'japonesa'],
    image: sushi
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    describe:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['italiana'],
    image: massa
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    describe:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['italiana'],
    image: massa
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    describe:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['italiana'],
    image: massa
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    describe:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['italiana'],
    image: massa
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    describe:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['italiana'],
    image: massa
  }
]

const Home = () => {
  return (
    <>
      <HomeHeader />
      <Main efood={food} />
    </>
  )
}

export default Home
