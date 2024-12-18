import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ECardapio, Efood } from '../models/cardapio'

type Product = {
  id: number
  price: number
}

type OrderResponse = {
  orderId: string
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    adress: {
      drescription: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Efood[], void>({
      query: () => 'restaurantes'
    }),
    getHero: builder.query<Efood, string>({
      query: (id) => `restaurantes/${id}`
    }),

    getMenu: builder.query<ECardapio, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<OrderResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetMenuQuery,
  useGetHeroQuery,
  usePurchaseMutation
} = api
export default api
