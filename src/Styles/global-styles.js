import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

#root {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

body {
  background: #1E0338;
}

main {
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  margin-left: 300px;
}

@media screen and (max-width: 1200px) {
  main {
    margin-left: 0px;
  }
}

.container {
  padding: 43px 49px;
  width: 100%;
  height: 100vh;
}

:root {
  --bgDark: #1E0338;
  --white: white;
  --bgGradient: linear-gradient(185deg, #fd749b 0%, #281ac8 100%);
}

::-webkit-scrollbar {
  width: 0px;
}
`;
