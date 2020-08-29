import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face { font-family: 'Braga'; src: url('Braga') format('ttf'); font-weight: normal; font-style: normal; }
  @font-face {
    font-family: 'GmarketSansBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
  font-family: 'GmarketSansLight';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
  @font-face { font-family: 'Estillon'; src: url('Estillon') format('ttf'); font-weight: normal; font-style: normal; }
  @font-face {
    font-family: 'Chosunilbo_myungjo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Chosunilbo_myungjo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  p{
    font-family: 'GmarketSansLight';
    color:#fff;
  }
`;