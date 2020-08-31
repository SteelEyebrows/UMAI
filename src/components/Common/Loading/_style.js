import styled from 'styled-components'


export const StyledLoading = styled.div`
position:fixed;
background:#000;
width:100vw;
height:100vh;
z-index:10002;
svg {
  position:absolute;
  max-height: 30vh;
  transform: translateY(100%);
  visibility:hidden;
  background:#000;
  .cls-1,.cls-2,.cls-3{fill:none;stroke-linecap:round;stroke-linejoin:round;}
  .cls-1{stroke:#fff;}
  .cls-2{stroke:#fff;}
  .cls-3{stroke:#fff;}
}

/// Could tidy but where's the fun in that? 

#Ramen2 {
	animation: 4s flicker infinite;
	animation-delay: 4s;
}

#Ramen3 {
	animation: 5s flicker infinite;
	animation-delay: 4s;
}


#Pork2 {
	animation: 6s flicker infinite;
	animation-delay: 2s;
}

#Pork3 {
	animation: 11s flicker infinite;
	animation-delay: 2s;
}

#Peppers3 {
	animation: 4s flicker infinite;
	animation-delay: 5s;
}



@keyframes flicker {
	0% {
		opacity: 1.0;
	}
	5% {
		opacity: 0.4;
	}
	6% {
		opacity: 1.0;
	}
	7% {
		opacity: 0.2;
	}
	10%, 100% {
		opacity: 1.0;
	}
}
`
