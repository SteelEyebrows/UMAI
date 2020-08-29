import React,{useState,useEffect,useRef} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Menu} from 'components';
import gsap, {TweenMax,TimelineMax, Sine,Power4,Expo,Linear } from 'gsap';

const gridGallery = [
  {
      type:"double",
      thumnail:"https://source.unsplash.com/crVO0UMdoVU/600x600",
      title:"Beach",
      subtitle:"Mølen, Nevlunghamn, Norway",
      desc:"This grid item spans one column and three rows to create focus. This is achieved by setting."
  },
  {
      type:"single",
      thumnail:"https://source.unsplash.com/xkMArBuwK44/600x600",
      title:"Louvre Museum Pyramid",
      subtitle:"Paris, France",
      desc:"This grid item spans one column and three rows to create focus. This is achieved by setting."
  },
  {
      type:"single",
      thumnail:"https://source.unsplash.com/vMRMYoLQzwo/600x600",
      title:"In the Bay",
      subtitle:"Oslo, Norway",
      desc:"Greeting the ships sailing in on a late summer evening."
  },
  {
      type:"single",
      thumnail:"https://source.unsplash.com/i9FLJwYhVQs/600x600",
      title:"Bonfire by the Lake",
      subtitle:"Øyungen, Norway",
      desc:"Low light over a lake as three friends warm themselves by the fire."
  },
  {
      type:"double",
      thumnail:"https://source.unsplash.com/8hRYTck6LBQ/600x600",
      title:"Sunset Lake",
      subtitle:"Somewhere, Earth",
      desc:"This grid item spans one column and three rows to create focus. This is achieved by setting."
  },
  {
      type:"single",
      thumnail:"https://source.unsplash.com/S2YssLw97l4/600x600",
      title:"Sparklers and Warm Souls",
      subtitle:"Porsgrunn, Norway",
      desc:"A couple enjoys the sparkles of warm friendship."
  }
]

const MenuContainer = ({history,match}) =>{


    
    useEffect(
		() => { 

    },
		[],
    );
    return(
        <>
            <Menu 
                history={history}
                source={gridGallery}
            />
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
    
});

export default MenuContainer;
