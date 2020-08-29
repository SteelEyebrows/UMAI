import React,{useEffect,useRef} from "react";
import { withRouter } from "react-router-dom";
import {StyledBrand} from './_style';
import {Link} from 'react-router-dom';

const Brand = ({   

}) => {

 return (
    <>			 

<StyledBrand>
        <section className="fullsize-video-bg">
          <div className="inner">

              <div className="inner-left">
                <h1>
                  1,000만의 찬사<br/> 
                  정통일식 전문점 <br/> 
                  우마이식당
                </h1>
              </div>
              <div className="inner-right">
                  <p>
                  차별화된 최상의 가치를 선사하는 외식 브랜드로 도약하고 있습니다. 지난 25년간 평균 180평 규모의 대형 매장 40여 개를 직영으로 운영하고 있는 국내 유일무이(唯一無二)한 정통 일식의 선두주자 입니다. 일식 전문가들의 장인정신과 철학을 담은 삿뽀로는 고객 한 분 한 분을 기억하고 그분들의 취향에 맞춘 요리와 서비스를 제공하기 위해 오늘도 고객님을 정성껏 모시는 오모테나시(御持て成し)’의 마음 가짐으로 임하고 있습니다.
                  </p>
              </div>
          </div>
          <div id="video-viewport">
              <video className="bg-video__content" autoPlay loop muted>
                  <source src="https://yumai.s3.ap-northeast-2.amazonaws.com/brand/cooking.mp4" type="video/mp4" />
              </video>
          </div>
          </section> 
</StyledBrand>
		</>
    );
  };

export default withRouter(Brand);

