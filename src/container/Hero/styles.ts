import styled from 'styled-components'
import { cores } from '../../styles'

export const HeroCss = styled.div`
  height: 280px;
  display: block;

  padding-top: 24px;
  padding-bottom: 32px;

  background-color: rgba(0, 0, 0, 0.5);
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: color;

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 32px;

    h4 {
      font-weight: 100;
      color: ${cores.branco};
    }

    strong {
      font-weight: bold;
      color: ${cores.branco};
    }
  }
`
