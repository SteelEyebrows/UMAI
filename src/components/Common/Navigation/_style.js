import styled,{keyframes} from 'styled-components';

export const StyledNavigation = styled.nav`
        position: fixed;
        width: 100%; 
        height:50px;
        z-index:10001;
        background:rgba(0,0,0,0);
        .logo{
            width:100px;
            height:auto;
            margin-bottom:-20px;
            }

        ul{
            display:flex;
            align-items:center;
            list-style-type: none;
            a{
                color: #fff;
                text-decoration: none;
                margin-left:10px;
                margin-right:10px;
            }
        }
`;
