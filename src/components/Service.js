import React,{useState} from 'react'
import Side from './images/service.png'
import styled from 'styled-components'
import Minicard from './Minicard';
import Play from './images/play.png'
const Service = () => {
		const [open,setOpen] = useState(false)
     const smallScreen = window.screen <= 600 ? 'true' : 'false'
	return ( 
		<Container>
			<Left><Wrapper>
				<Title>Simple process to start</Title>
				<Desc>
				Get inspired by outstanding web design ideas! We'll start you off on the right foot with gorgeous
			  web design inspiration, so you can build a stand-out website.
				</Desc>
				<CardContainer>
				<Minicard icon=" https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/60/000000/external-bulb-advertising-icongeek26-outline-colour-icongeek26.png"/>
				<Minicard icon="https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/64/000000/external-laptop-lifestyle-icongeek26-outline-colour-icongeek26.png"/>
				<Minicard icon="https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/64/000000/external-digital-mobile-application-icongeek26-outline-colour-icongeek26.png"/>
				</CardContainer>
				
				 <Button onClick={()=>{setOpen(true)}}><Icon src={Play}/> Watch Video</Button>
				</Wrapper>
				</Left>
			<Right>
				<Image open={open} src={Side}/>
				
			</Right>   
			{smallScreen && open && ( <Modal> <CloseButton onClick={()=>{setOpen(false)}}>close x</CloseButton>
			<Video open={open} autoplay controls src="https://player.vimeo.com/external/374516783.hd.mp4?s=e0f8468cfb38c47b0725d7a20a11b087628ccfed&profile_id=174"/>
			 </Modal>)}
		</Container>
	)
}
 
const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
background:#f7f7f7;
 padding: 20px;
 @media only screen and (max-width: 600px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0px;
		padding-top: 60px;
	} 
`;
const Icon = styled.img`
width: 20px;
margin-right: 10px;
`;
const Wrapper = styled.div`
padding: 100px;
display: flex;
flex-direction: column;
justify-content:center;
@media only screen and (max-width: 600px) {
		width: 90%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding : 20px;
    margin-top:20px;
		border-top: 1px solid #e6e6e6;
	}
`;
//modal
const Modal = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0,0,0,0.5);
display: flex;
justify-content: center;
align-items: center;
`;
const CloseButton = styled.button`
width:5%;
height:5%;
border-radius: 10px;
padding:5px;
position: absolute;
top: 0;
font-size: 13px;
margin-top: 10%;
z-index:99999;
right: 35px;
@media only screen and (max-width: 600px) {
	width:15%;
border-radius: 50px;
padding:5px;
position: absolute;
top: 0;
margin-top: 45%;
z-index:99999;
right: 0;
}

`
const Title = styled.h1`
 font-size: 50px;
display: flex;
flex-direction: column;
@media only screen and (max-width: 600px) {
		font-size: 40px;

	}
`;
const Desc = styled.p`
font-size: 20px;
margin-top: 20px;
color: black;
 width: 80%;
 @media only screen and (max-width: 600px) {
		width:100%

	}
`
const CardContainer = styled.div`
margin-top: 50px;
display: flex;
flex-direction: row;
 
`
const Left = styled.div`
width: 60%;
position: relative;
@media only screen and (max-width: 600px) {
	width:100%;
	}
`
const Right = styled.div`
width: 40%;
@media only screen and (max-width: 600px) {
	display:none;
	}
`
const Image = styled.img`
width: 100%;
display: ${props => props.open && 'none'};
`;
const Video = styled.video`
display: ${props => !props.open && 'none'};
height: auto;
margin: auto;
position: absolute;
top:0;
bottom:0;
right:0;
left: 0;
width: 90%; 
z-index: 9999;
border:0.2px solid gray;
@media only screen and (max-width: 600px) {
	top: 20vh; 
	bottom: 10%;
	right: 1px;
	left:1px ;
	width: inherit;
	z-index: 9999;
	padding: 3px;
	border: 0.2px solid gray;
}
`;
const Button = styled.button`
padding:10px 19px;
border:1px solid white;
border-radius: 10px;
color: white;
width: 30%;
display: flex;
background:darkblue;
margin-top: 20px;
font-size: 16px;
letter-spacing: 1px;
cursor: pointer;
@media only screen and (max-width: 600px) {
		width:60%

	}
`;
export default Service
