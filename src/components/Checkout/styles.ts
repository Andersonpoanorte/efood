import styled from 'styled-components'
import { cores } from '../../styles'
import { GoToCheckoutButton } from '../Cart/styles'

type InputContainerProps = {
  variant?: 'double'
}

export const CheckoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  h3 {
    font-size: 16px;
    line-height: 18.75px;
    margin-bottom: 16px;
    color: ${cores.begeClaro};
  }
`

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.variant === 'double' ? 'row' : 'column')};
  gap: 16px;
  line-height: 16.41px;

  * {
    color: ${cores.begeClaro};
  }

  label {
    font-size: 14px;
  }

  input {
    margin-bottom: 8px;
    background-color: ${cores.begeClaro};
    border: none;
    padding: 8px;
    color: #4b4b4b;
    font-size: 14px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  #number {
    width: 70px;
  }

  #expiresYear {
    width: 130px;
  }
`

export const CheckoutButton = styled(GoToCheckoutButton)`
  width: 100%;
  color: ${cores.vermelhorClaro};
  margin-bottom: 8px;

  &.disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const SucessMessage = styled.div`
  * {
    color: ${cores.begeClaro};
  }

  h3 {
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 16px;
  }

  button {
    color: ${cores.vermelhorClaro};
  }
`
