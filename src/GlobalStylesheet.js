import { createGlobalStyle } from 'styled-components'

import './variables.css'

const GlobalStylesheet = createGlobalStyle`
  html {
    box-sizing: border-box;
    overflow-y: scroll;
  }
  
  body {
    margin: 0;
  
    font-family: 'Barlow', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  
    overflow-x: hidden;
  
    background: var(--backgroud-color);
    color: var(--text-color);
  }
  
  *,
  :after,
  :before {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }
  
  a {
    color: var(--link-color);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  table {
    width: calc(100% - 2px);
    max-width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    
    thead {
      font-size: 80%;
      text-transform: uppercase;
      border: 0;
    }
    
    tbody {
      background: #ffffff;
      border: 1px solid var(--border-color);    

      td {
        text-align: center;
        border-top: 1px solid var(--border-color);
      }
    }
    
    th, td {
      padding: var(--spacing-normal);
      align-items: center;
      
      span {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
`

export default GlobalStylesheet
