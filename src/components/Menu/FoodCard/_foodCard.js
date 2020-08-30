import React,{useEffect,useRef} from "react";
import { withRouter } from "react-router-dom";
import {StyledFoodCard} from './_style';
import {Link} from 'react-router-dom';
import gsap, {TweenMax,TimelineMax, Sine,Power4,Expo,Linear } from 'gsap';
import {Modal} from 'components/Common';
import ModalContents from '../ModalContents';
const FoodCard = ({   
  image
}) => {
  
  useEffect(
		() => { 
      gsap.fromTo('.text', 14, {
        rotation: 0, 
      },
      {
        rotation: 360,
        repeat: -1,
      });
    },
		[],
    );
 return (
    <>			 

  <StyledFoodCard>
      <div className="center">
        <div className="circle">
          <div className="logo">
            <img src={image} />
          </div>
          <div className="text">
            <svg x="0" y="0" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xmlSpace="preserve">
            <defs>
              <path id="circlePath"
                d="
                M 150, 150
                m -120, 0
                a 120,120 0 0,1 240,0
                a 120,120 0 0,1 -240,0
                "
              />
            </defs>
              <g>
              <text>
                <textPath xlinkHref="#circlePath">
                  Sign up today!            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For exciting news &amp; updates
                </textPath>
              </text>
              </g>
            </svg>
          </div>
          <Modal>
            <ModalContents image={image}/>
          </Modal>
        </div>
      </div>
  </StyledFoodCard>
		</>
    );
  };

export default withRouter(FoodCard);

