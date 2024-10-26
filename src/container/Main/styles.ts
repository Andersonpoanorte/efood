import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const MainCss = styled.section`
  padding-top: 80px;
  padding-bottom: 120px;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    row-gap: 80px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 80%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
