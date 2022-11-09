import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root{
    --color-primary: #00356B;
    --color-secondary: #2A80D7;
    --color-light: #F4FAFF;

    --grey-1: #212529;
    --grey-2: #ADADAD;
    --grey-3: #DADADA;
    --grey-4: #F4F4F4;
}

* {
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        font-family: 'Roboto', sans-serif;
    }

    body,html{
    width: 100vw;
    height: 100vh;
  }
  
  ul,li {
    list-style: none;
  }
  button {
    cursor: pointer;
    &:disabled{
      cursor: not-allowed;
    }
  }
  input {
    outline: none;
  }
  a {
    text-decoration: none;
  } 

  .input-default{
    padding: 10px 15px;
  background-color: var(--grey-4);
  border: 1px solid transparent;
  border-radius: 8px;
  :focus {
    border: 1px solid var(--grey-1);
  }
  }
`;
