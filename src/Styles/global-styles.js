import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  user-select: none;
  -webkit-user-drag: none;
  transition: ease .3s;
}

#root {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

body {
  background: var(--bg-color);
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
}

:root {
  --primary-color: #1E0338;
  --secondary-color: white;
  --bgGradient: linear-gradient(185deg, #fd749b 0%, #281ac8 100%);
  --bg-color: #1E0338;
}

.light-mode{
    --primary-color: #fff;
    --secondary-color: #858585;
    --bg-color: #FFF9FE;
}

::-webkit-scrollbar {
  width: 0px;
}
`;
