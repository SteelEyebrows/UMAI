import styled,{keyframes} from 'styled-components';


export const StyledFoodCard = styled.div`
      
.center {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .circle {
    position: relative;
    width: 180px;
    height: 180px;
    color: #fff;
    background: rgba(0,0,0,0);
    border-radius: 50%;
    border: 2px solid;
    margin-bottom:50px;
  }
  
  .logo {
    display:flex;
    align-items:center;
    justify-content:center;
    
    img{
        margin-top:-30%;
        width:100%;
        height:auto;
        z-index:3;
    }
  }
  
  .button {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    padding: 8px;
    font-weight: bold;
    text-transform: uppercase;
    background: #000;
    border: 2px solid;
    cursor: pointer;
    z-index:3;
    &:hover {
        color: #000;
        background: #fff;
        border-color: #fff;
      }  
    }
  

  .text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    fill: #fff;
    z-index:2;

  }
`;
