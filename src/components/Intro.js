import React from 'react';
import styled  from 'styled-components';
import Banner from './images/birdeye_001a.gif'

function Intro() {
	return (
		<Container>
		<Left>
			<Title> Adventure in Creative age </Title>
			<Desc>We believe that designing products and services in close partnership with our 
				clients is the only way to have a real impact on their business. </Desc>
				<Info>
					<Button>START A PROJECT </Button>
					<Contact>
						<Phone> Call Us (012) 345 -6789</Phone>
					<ContactText>For any Enquiry or Complain  </ContactText>
					</Contact>
				</Info>
		</Left>
		<Right> <Image src={Banner}/> </Right>

		</Container>
	)
}

//styled-components
 const Container = styled.div`
	height: calc(100% - 50px);
	display:flex;
	padding:30px;

	@media only screen and (max-width: 600px) {
		flex-direction: column;
		align-items: center;
		flex:0
	}
	`;
	const Left = styled.div`
	width:60%;
	 display: flex;
	 flex-direction: column;
	 align-items: center;
	 justify-content: center ;
	 @media only screen and (max-width: 600px) {
		flex-direction: column;
		top:0;
    width:100%;
		height: 50%;
		justify-content:center;
		align-items: center;
	}
	`;

	const Title = styled.div`
	font-size: 60px;
	font-weight: bolder;
	letter-spacing:4px;
	width:60%;
	@media only screen and (max-width: 600px) {
		font-size: 40px;
		font-weight: bolder;
		width: 100%;

	}
	`;
	const Desc = styled.p`
	width:60%;
	font-size : 20px;
	font-weight: lighter;
	letter-spacing: 0.5px;
	margin-top:20px;
	@media only screen and (max-width: 600px) {
		/* margin-top:20px; */
		width:100%;
    padding:10px
	}
	`;

	const Info = styled.p`
	width:60%;
	display: flex;
	justify-content:space-between;
	margin-top: 30px;
	@media only screen and (max-width: 600px) {
		flex-direction: column;
		margin-top:20px;
	  justify-content: center;
		align-items: center;
		width:50%;
      
	}

	`;
	 const Button = styled.button`
	 padding:13px 15px;
	 cursor: pointer;
	 background-color: darkblue;
	 letter-spacing:2px;
   border-radius: 10px;
	 color:white;
	 font-weight: bold;
	 border:1px solid white;
	 @media only screen and (max-width: 600px) {
		margin-bottom:20px;
		font-size:12px;
 
	}

	 `;
	const Contact = styled.div`
	display:flex;
	flex-direction: column;
	justify-content: flex-start;
	@media only screen and (max-width: 600px) {
		margin-bottom:20px;
		font-size:13px;
 
	}
	`
	const Phone = styled.div`
	color:crimson;
 font-weight:bolder
 
	`
	const ContactText = styled.div`
	color:gray;
	font-weight: lighter;
	padding-top:5px
	`;
	const Right = styled.div`
	width:40%;
  display:flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	`;
	const Image = styled.img`
	width: 100%;
	@media only screen and (max-width: 600px) {
		display: none;
	}
	`;
 








export default Intro
