import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    background: ${({ theme }) => theme['base-background']};
    outline: 0;
  }

  body{
    color: ${(props) => props.theme['base-text']};
    background: ${({ theme }) => theme['base-background']};
  }

  body, input, textarea, button{
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  ul {
    list-style: none;
  }

  a{
    color: inherit;
    text-decoration: none;
  }
  button{
    cursor: pointer;
  }
`
