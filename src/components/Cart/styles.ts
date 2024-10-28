import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonCard, ButtonMenu } from '../Button/styles'
import lixeira from '../../assets/image/bin.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  color: ${cores.begeClaro};
  z-index: 999;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${cores.vermelhorClaro};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  ${ButtonMenu} {
    max-width: 100%;
    width: 100%;
  }

  ul {
    display: grid;
    row-gap: 16px;
  }
`

export const Price = styled.p`
  font-size: 14px;
  align-items: center;
  line-height: 16px;
  font-weight: 700;
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-top: 40px;
`

export const CartItem = styled.li`
  display: flex;
  height: 100px;
  padding: 8px 0 12px 8px;
  background-color: ${cores.begeClaro};
  color: ${cores.vermelhorClaro};
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    line-height: 21px;
    align-items: center;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
    line-height: 22px;
    font-weight: bold;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`
export const AddIem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`

export const GoToCheckoutButton = styled.button`
  padding: 4px 6px;
  height: 24px;
  font-size: 14px;
  background-color: ${cores.begeClaro};
  color: ${cores.vermelhorClaro};
  font-weight: 700;
  align-items: center;
  border: none;

  &.disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  width: 100%;
`
