import React,{useEffect,useRef} from "react";
import { withRouter } from "react-router-dom";
import {StyledHome} from './_style';
import {Link} from 'react-router-dom';
import {Loading} from 'components/Common';
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
      img1:'https://yumai.s3.ap-northeast-2.amazonaws.com/main/pair1.jpg',
      img2:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAzMTNfOCAg%2FMDAxNTg0MDgxODQzMjcy.fCcYi7AYFYAT9YUHXaCjVspLl1SKrFNw0ei9k2HvFUAg.YVV0pVigAHGTpTRz_zJX_Op-zTiTYmkEGultHWSi4MIg.JPEG.catch100%2F002.jpg',
      sentence:['일본 현지의','맛과 감성을 위한','전문가들의','끝없는 연구.']
    },
    {
      img1:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA1MTBfMjc3%2FMDAxNDk0Mzg2MTM2MDgy.miB7cNoI4ehBvSg2kmBUZLQA8vlhvtqNtPftKYsYudcg.fy05_xgTd9zt5fOcW1nisqjjpM0qp_ktdgrh5omOclUg.JPEG.88missha%2FKakaoTalk_20170510_121046009.jpg',
      img2:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MTRfMjE1%2FMDAxNTk3MzM2NDExMDYx.q9SD8Es3N_vZFiKWA0y0GItSXThgi6Tl1yNwzJsnnSUg.wG8DE3er7-xwfaZh3RwLj8efhUAUI_6u8tLH6iqcA_gg.JPEG.98wldus%2FS__3121201.jpg',
      sentence:['차별화된','최상의 가치를','고객에게 보장하는','장인정신과 철학.']
    },
    {
      img1:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MDlfMTA1%2FMDAxNTk0MzAyMDIwNzUw.f3Z7RzcvY9XrHE2Q54bd9-pWtmqKSA0e2o2juoTC-Ekg.uF-NunuW0-i8PN7OusnyKkFr2oGmufPcnif-pvcd7BMg.JPEG.jie_jeong%2FIMG_3567.jpg',
      img2:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA3MTFfMTE5%2FMDAxNTYyODM3MzI4Mzc4.zqavVzvPFBXeNbb4Wtv8K9YZrB5ESbvCvTw3uJZDZdsg.ki4WbgsFDKtHv0QPldPoQE5LiRjuppyLMHQj-PYNJ7Ag.JPEG.sonduksonduk%2FIMG_2751.JPG',
      sentence:[]
    },
  ]
}

const Home = ({   

}) => {

 return (
    <>
      <Loading/>			 
      <StyledHome>  
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
            경기도 안양시 동안구 범계동<br/>
            평촌대로227번길 26<br/>
          </span>
        </div>
      </StyledHome>
		</>
    );
  };

export default withRouter(Home);

