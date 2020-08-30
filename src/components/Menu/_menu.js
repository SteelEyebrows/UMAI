import React,{useEffect,useRef} from "react";
import { withRouter } from "react-router-dom";
import {StyledMenu} from './_style';
import FoodCard from './FoodCard';
import {Link} from 'react-router-dom';
import {Modal} from 'components/Common';

const source = [
  "https://yumai.s3.ap-northeast-2.amazonaws.com/menu/KakaoTalk_20200828_152546791_01.png",
  "https://yumai.s3.ap-northeast-2.amazonaws.com/menu/KakaoTalk_20200828_152546791_02.png",
  "https://yumai.s3.ap-northeast-2.amazonaws.com/menu/KakaoTalk_20200828_152546791_03.png",
  "https://yumai.s3.ap-northeast-2.amazonaws.com/menu/KakaoTalk_20200828_152546791_04.png",
  "https://yumai.s3.ap-northeast-2.amazonaws.com/menu/KakaoTalk_20200828_152546791_05.png",
  "https://yumai.s3.ap-northeast-2.amazonaws.com/menu/KakaoTalk_20200828_152546791_06.png"
 ]

const Menu = ({   

}) => {

 return (
    <>			 
      <StyledMenu>
        
        {/* <main id="content" className="main-area">
          <div className="title">
              <h1>Menu</h1>
          </div>            
            <ul className="cards">

                <li className="card-item">
                    <h2>일본라멘</h2>
                </li>
                {
                  source.map((item,i)=> <li><FoodCard image={item}/></li>)
                }
            </ul>
        </main>         
        <div className="filter" />     */}


        <section className="fullsize-video-bg">
          <div className="inner">

              <div className="inner-left">
                <h1>
                  메뉴
                </h1>
              </div>
              <div className="inner-right">
                <ul className="cards">
                    {
                      source.map((item,i)=> <li><FoodCard image={item}/></li>)
                    }
                </ul>
              </div>
          </div>
          <div id="video-viewport">
              <img src="https://yumai.s3.ap-northeast-2.amazonaws.com/main/2.jpg"/>
          </div>
          </section> 
      </StyledMenu>
		</>
    );
  };

export default withRouter(Menu);

