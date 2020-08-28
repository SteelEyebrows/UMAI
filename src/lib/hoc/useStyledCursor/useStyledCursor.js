import React,{ useRef } from "react";
import gsap, { Sine } from 'gsap';

const useStyledCursor = () => {
    const circleRef = useRef(null);
    const circleFollowRef = useRef(null);

    const moveCircle = (e) => {
        gsap.to(circleRef.current, 0.3, {
          x: e.clientX,
          y: e.clientY
      });
        gsap.to(circleFollowRef.current, 0.7, {
          x: e.clientX,
          y: e.clientY
      });  
    }
    const enterCircle = (e) => {
        gsap.to(circleFollowRef.current, 0.7, {
          scale:2,
      });  
	}
	const leaveCircle = (e) => {
        gsap.to(circleFollowRef.current, 0.7, {
		 scale:1,
      });  
    }
    return ({
      circleRef,
      circleFollowRef,
	  moveCircle,
	  enterCircle,
	  leaveCircle
	});
};

export default useStyledCursor;