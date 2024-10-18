import styled from 'styled-components'
import { cores } from '../../styles'

export const MenuCard = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${cores.vermelhorClaro};
  color: ${cores.begeClaro};
  padding: 8px;

  h3 {
    font-size: 16px;
    font-weight: bold;
    line-height: 19px;
    margin-top: 6px;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 8px;
  }
`
