import React from 'react'
import styled from 'styled-components';
import App from './images/hand.png'
function Feature() {
	return (
		<Container>
			<Left>
			<Image src ={App}/>
			</Left>
			<Right>
				<Title>
           <b>Good </b> design <br/>
					 <b>Good </b> business 
				</Title>
					 <Subtitle>We know that great design means great business</Subtitle>
					 <Desc>
					 Get inspired by outstanding web design ideas! We'll start you off on the right foot with gorgeous
					  web design inspiration, so you can build a stand-out website.

					 </Desc>
					 <Button>KNOW MORE</Button>
			</Right>
      
		</Container>
	)
}
//styled-component

const Container = styled.div`
display:flex;
padding:20px;
background:#f7f7f7;
width:100%;
height: 100%;
justify-content: center;
align-items: center;
`;
const Image = styled.img`
width : 100%;
display: flex;
align-items: center;
justify-content: center;
padding-left: 10px;
`;
const Title = styled.h1`
	font-size: 50px;
	font-weight: bold;
	letter-spacing:4px;
	width:60%
	`;
const Left = styled.div`
	width:50%;
 
`;
const Right = styled.div`
	width:60%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 padding-left : 60px
`;
const Desc = styled.p`
	width:80%;
	font-size : 20px;
	font-weight: lighter;
	letter-spacing: 0.5px;
	margin-top:20px;
  
	`;
	const Subtitle   = styled.p`
	width:60%;
	font-size : 20px;
	font-weight: lighter;
	letter-spacing: 0.5px;
	margin-top:20px;
 
	`;

 const Button = styled.button`
	padding:10px 19px;
	border:1px solid white;
	border-radius: 10px;
	color: white;
	width: 20%;
	background:darkblue;
	margin-top: 20px;
	font-size: 16px;
	letter-spacing: 1px;
	`;
export default Feature
