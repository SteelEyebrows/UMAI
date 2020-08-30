import React,{useEffect,useRef} from "react";
import { withRouter } from "react-router-dom";
import {StyledNavigation} from './_style';
import {Link} from 'react-router-dom';

const source = {
    logo:"https://yumai.s3.ap-northeast-2.amazonaws.com/main/yumaiLogo.png",
    menu:[
      {name:'Home',link:'/'},
      {name:'Brand',link:'/brand'},
      {name:'Branch',link:'/branch'},
      {name:'Menu',link:'/menu'},
    ],
    phone:'031-384-8340',
    sns:[
      {
        name:'address',
        image:'https://yumai.s3.ap-northeast-2.amazonaws.com/navigation/geo.png',
        link:'https://map.naver.com/v5/entry/place/704972348?c=14132162.6867615,4493832.0221566,15,0,0,0,dh&placePath=%3Fentry=plt'
      },
      {
        name:'instagram',
        image:'https://yumai.s3.ap-northeast-2.amazonaws.com/navigation/instagram.png',
        link:'https://map.naver.com/v5/entry/place/704972348?c=14132162.6867615,4493832.0221566,15,0,0,0,dh&placePath=%3Fentry=plt'
      }
    ]
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
          <ul>
                  <li>
                     <p><b>{source.phone}</b></p>
                  </li>
                  {
                    source.sns.map((item,i)=>{
                      return(
                        <li className="sns">
                          <a href={item.link} target="_blank" title={item.name}><img src={item.image} alt={item.name}/></a>
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

