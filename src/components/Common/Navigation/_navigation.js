import React,{useEffect,useRef} from "react";
import { withRouter } from "react-router-dom";
import {StyledNavigation} from './_style';
import {Link} from 'react-router-dom';

const source = {
    logo:"https://yumai.s3.ap-northeast-2.amazonaws.com/main/yumaiLogo.png",
    menu:[
      {name:'Brand',link:'/brand'},
      {name:'Branch',link:'/branch'},
      {name:'Menu',link:'/menu'},
  
    ],

  }

const Navigation = ({   

}) => {

 return (
    <>			 

<StyledNavigation>
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
</StyledNavigation>
		</>
    );
  };

export default withRouter(Navigation);

