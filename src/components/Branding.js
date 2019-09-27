import styled from 'styled-components'

import logo from '../images/kleros-symbol.svg'

const Branding = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${logo});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;

  animation: spin 4s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`

export default Branding
