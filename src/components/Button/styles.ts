import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonCard = styled(Link)`
  padding: 4px 6px;
  width: 82px;
  height: 24px;
  font-size: 14px;
  background-color: ${cores.vermelhorClaro};
  color: ${cores.begeClaro};
  font-weight: 700;
  align-items: center;
  text-decoration: none;
`

export const ButtonMenu = styled.button`
  background-color: ${cores.begeClaro};
  color: ${cores.vermelhorClaro};
  width: 304px;
  height: 24px;
  font-size: 14px;
  text-align: center;
  font-weight: 700;
  border: none;
  cursor: pointer;
`
