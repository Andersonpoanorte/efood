import HeaderCart from '../../container/HeaderCart'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Efood } from '../../models/cardapio'
import MenuItem from '../../components/MenuItem'
import Hero from '../../container/Hero'

const Restaurant = () => {
  const { id } = useParams()
  const [restaurantList, setRestaurantList] = useState<Efood>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurantList(res))
  }, [id])

  if (!restaurantList) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderCart />
      <Hero
        image={restaurantList.capa}
        titulo={restaurantList.titulo}
        type={restaurantList.tipo}
      />
      <MenuItem />
    </>
  )
}
export default Restaurant
