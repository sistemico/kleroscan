import styled from 'styled-components'

const Pill = styled.div`
  display: inline-block;
  min-width: 2rem;
  padding: 0.1rem 0.2rem;
  background: var(--border-color);
  color: inherit;
  text-shadow: 1px 1px var(--text-inverse-color);
  border-radius: 25%;

  &:hover {
    text-decoration: none;
    opacity: 0.5;
  }
`

export default Pill
