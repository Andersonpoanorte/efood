import HomeHeader from '../../container/HomeHeader'
import Main from '../../container/Main'

import { useEffect, useState } from 'react'
import { Efood } from '../../models/cardapio'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Efood[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <HomeHeader />
      <Main efood={restaurantes} />
    </>
  )
}

export default Home
