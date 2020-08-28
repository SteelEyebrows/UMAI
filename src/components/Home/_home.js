import React,{useEffect,useRef} from "react";
import { withRouter } from "react-router-dom";
import {StyledHome} from './_style';
import {Link} from 'react-router-dom';

const source = {
  logo:"https://yumai.s3.ap-northeast-2.amazonaws.com/main/yumaiLogo.png",
  menu:[
    {name:'Brand',link:'/brand'},
    {name:'Branch',link:'/branch'},
    {name:'Menu',link:'/menu'},

  ],
  background:[

  ],
  pairs:[
    {
      img1:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/photo1.jpg',
      img2:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/photo2.jpg',
      sentence:['일본 현지의','맛과 감성을 위한','전문가들의','끝없는 연구.']
    },
    {
      img1:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/photo3.jpg',
      img2:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/photo4.jpg',
      sentence:['차별화된','최상의 가치를','고객에게 보장하는','장인정신과 철학.']
    },
    {
      img1:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/photo5.jpg',
      img2:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/photo6.jpg',
      sentence:[]
    },
  ]
}

const Home = ({   

}) => {

 return (
    <>			 
      <StyledHome>
      <nav className="nav nav--left js-nav">
          <ul>
            <li>
              <img className="logo" src={source.logo} />
            </li>
            {
              source.menu.map((item,i)=>{
                return(
                  <li>
                     <Link className="link" to={item.link}>{item.name}</Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>

        <nav className="nav nav--right">
          <ul>
            <li>
              <a href="https://twitter.com/Jesper_Landberg?lang=en" target="_blank"><span>Say hi</span></a>
            </li>
            <li>
              <a href="#">
                <span>Cart</span>
                <div className="cart-total">0</div>
              </a>
            </li>
          </ul>
        </nav>

        <div className="slider js-slider">
          <div className="slider__inner js-slider__inner"></div>
            {
              source.pairs.map((item,i)=>{
                return(
                  <div className="slide js-slide">
                  <div className="slide__content">
                    <figure className="slide__img js-slide__img">
                      <img src={item.img1}/>
                    </figure>
                    <figure className="slide__img js-slide__img">
                      <img src={item.img2}/>
                    </figure>
                  </div>
                  
                  <div className="slider__text js-slider__text">
                    {
                      item.sentence.map(p=><div className="slider__text-line js-slider__text-line"><div>{p}</div></div>)
                    }
                  </div>
                  
                </div>
                )
              })
            }
          <nav className="slider__nav js-slider__nav">
            <div className="slider-bullet js-slider-bullet">
              <span className="slider-bullet__text js-slider-bullet__text">01</span>
              <span className="slider-bullet__line js-slider-bullet__line"></span>
            </div>
            <div className="slider-bullet js-slider-bullet">
              <span className="slider-bullet__text js-slider-bullet__text">02</span>
              <span className="slider-bullet__line js-slider-bullet__line"></span>
            </div>
            <div className="slider-bullet js-slider-bullet">
              <span className="slider-bullet__text js-slider-bullet__text">03</span>
              <span className="slider-bullet__line js-slider-bullet__line"></span>
            </div>
          </nav>
          
          <div className="scroll js-scroll">Scroll</div>
          
        </div>

        <div className="vert-text">
          <span>
            Wings+Horns<br/>
            X Kyoto Black
          </span>
        </div>
      </StyledHome>
		</>
    );
  };

export default withRouter(Home);

