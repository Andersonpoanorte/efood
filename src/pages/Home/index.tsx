import HomeHeader from '../../container/HomeHeader'
import Main from '../../container/Main'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantes } = useGetRestaurantsQuery()

  if (restaurantes) {
    return (
      <>
        <HomeHeader />
        <Main efood={restaurantes} />
      </>
    )
  }
  return <h4>Carregando</h4>
}

export default Home
