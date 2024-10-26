import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const HeaderImage = styled.div`
  max-width: 2150px;
  width: 100%;
  height: 385px;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: ${breakpoints.desktop}) {
    width: 1250px;
  }
`
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 60px;
    margin-bottom: 115px;
  }

  h1 {
    width: 539px;
    height: 86px;
    line-height: 42px;
    font-size: 36px;
    font-weight: bold;
    text-align: center;
  }
`
