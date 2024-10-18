import { styled } from 'styled-components'
import { cores } from '../../styles'

export const CardProduct = styled.div`
  max-width: 1024px;
  width: 473px;
  margin: 0 auto;
  color: ${cores.vermelhorClaro};
  border: 1px solid ${cores.vermelhorClaro};
  position: relative;
`

export const CardTag = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  top: 16px;
  right: 16px;
`
export const CardItem = styled.div`
  padding: 8px;
  height: 181px;
  width: 473px;

  p {
    font-size: 14px;
    line-height: 22px;
    width: 456px;
    height: 88px;
    margin-bottom: 16px;
  }
`
export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-bottom: 16px;

  h3 {
    font-size: 18px;
    font-weight: bold;
  }
`

export const Score = styled.div`
  font-size: 18px;
  align-items: center;
  font-weight: bold;
  display: flex;
  gap: 8px;

  img {
    width: 21px;
    height: 21px;
  }
`
