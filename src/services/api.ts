import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ECardapio, Efood } from '../models/cardapio'

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
    })
  })
})

export const { useGetRestaurantsQuery, useGetMenuQuery, useGetHeroQuery } = api
export default api
