import styled from 'styled-components'

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

  background: var(--backgroud-color);

  pointer-events: none;

  animation: fade;
  animation-duration: 250ms;
  animation-fill-mode: forwards;

  @keyframes fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 0.8;
    }
  }
`

export default Overlay
