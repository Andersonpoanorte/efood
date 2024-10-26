import HeaderCart from '../../container/HeaderCart'

import { useParams } from 'react-router-dom'

import MenuItem from '../../components/MenuItem'
import Hero from '../../container/Hero'
import { useEffect, useState } from 'react'
import { Efood } from '../../models/cardapio'
import Cardapio from '../../components/Cardapio'

const Restaurant = () => {
  const { id } = useParams<{ id: string }>()
  const [restaurants, setRestaurants] = useState<Efood[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])
  if (!id) {
    return <h3>Oops...404</h3>
  }
  const restaurante = restaurants.find((r) => r.id === parseInt(id))

  return (
    <>
      <HeaderCart />
      {restaurante ? (
        <>
          <Hero />
          <div className="container">
            {restaurante.cardapio ? (
              <Cardapio cardapioItems={restaurante.cardapio} />
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <>OOPS! 404</>
      )}
    </>
  )
}
export default Restaurant
