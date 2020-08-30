import styled,{keyframes} from 'styled-components';

export const StyledNavigation = styled.nav`
        position: fixed;
        display:flex;
        justify-content: space-between;
        width: 100%; 
        height:50px;
        z-index:10001;
        background:rgba(0,0,0,0);
        margin-top:30px;
        .logo{
            width:100px;
            height:auto;
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
            .sns{
                img{
                    width:40px;
                    height:40px;
                    margin-right:10px;
                }
            }
        }
`;
