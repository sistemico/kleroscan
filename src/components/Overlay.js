import styled from 'styled-components'

import Branding from './Branding'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  touch-action: none;

  background: var(--overlay-backgroud-color);

  pointer-events: none;

  animation: fade;
  animation-duration: 250ms;
  animation-fill-mode: forwards;

  ${Branding} {
    width: 70px;
    height: 70px;
    animation-duration: 2s;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`

export default Overlay
