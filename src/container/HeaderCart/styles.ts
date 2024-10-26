import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderImage = styled.div`
  max-width: 2150px;
  width: 100%;
  height: 186px;
  padding-top: 60px;
  background-repeat: no-repeat;
  background-size: cover;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${cores.vermelhorClaro};
`

export const LinkCart = styled.a`
  font-size: 18px;
  font-weight: bold;
  align-items: center;
`
