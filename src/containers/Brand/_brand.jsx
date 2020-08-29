import React,{useState,useEffect,useRef} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Brand} from 'components';
import gsap, {TweenMax,TimelineMax, Sine,Power4,Expo,Linear } from 'gsap';


const BrandContainer = ({history,match}) =>{


    
    useEffect(
		() => { 

    },
		[],
    );
    return(
        <>
            <Brand 
                history={history}

            />
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
    
});

export default BrandContainer;
