import styled,{keyframes} from 'styled-components';


export const StyledFooter =styled.footer`

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 241px;
  background-color: white;
  justify-content: space-between;
  margin-top:100vh;
  .section {
    margin-top: 52px;
    flex: 22%;

    @include media("<screen-x") {
      flex: 50%;
    }
    @include media("<tablet-xx") {
      flex: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .title {
      font-family: LucidaGrande;
      font-size: 16px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      color: black;
      margin-bottom: 13px;
    }
    li {
      a {
        font-family: OpenSans;
        font-size: 16px;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.5;
        letter-spacing: normal;
      }
    }

    p {
      font-size: 16px;
      font-family: OpenSans;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
    }
  }
  .section:nth-child(1) {
    margin-left: 20px;

    @include media("<screen-x") {
      margin-left: 0;
    }
  }


`;
