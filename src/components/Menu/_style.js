import styled,{keyframes} from 'styled-components';

export const StyledMenu =styled.div`

   
.inner{
    width:100%;
    height:100%;
    padding:100px;
        &-left{
            display:flex;
            width:100vw;
            height:200px;
            text-align:center;
            h1{
                color:#fff;
                font-size:5rem;
                z-index:2;
            }
        }
        &-right{
            display:flex;    
            .cards{
                width:100vw;
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
                grid-gap: 1rem;
            }
        }
}


#video-viewport { 
    position: fixed; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%; 
    overflow: hidden; 
    z-index: -1; 
    img{
        display: block; 
        width: 100%; 
        height: auto; 
    }
}

.fullsize-video-bg { 
    height: 100%; 
    overflow: hidden; 
}
.fullsize-video-bg:before { 
    content: ""; 
    background: rgba(0,0,0,.9); 
    position: fixed; 
    top: 0; 
    left: 0;
    width: 100%; 
    height: 100%; 
    z-index: 0; 
}
.fullsize-video-bg:after { 
    content: ""; 
    background-image:radial-gradient(black 1px, transparent 0);
    background-size: 3px 3px; 
    position: fixed; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%; 
    z-index: 1; 
}
`;
