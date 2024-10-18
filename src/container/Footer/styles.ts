import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 298px;
  background-color: ${cores.begeClaro};

  p {
    margin-top: 80px;
    text-align: center;
    width: 480px;
    font-size: 10px;
    line-height: 12px;
    font-weight: 400;
  }
`
export const Logo = styled.img`
  margin-top: 40px;
`
export const RedesSociais = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 30px;
`
