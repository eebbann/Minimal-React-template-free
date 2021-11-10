import React,{useState} from 'react'
import Side from './images/service.png'
import styled from 'styled-components'
import Minicard from './Minicard';
import Play from './images/play.png'
const Service = () => {
		const [open,setOpen] = useState(false)

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
				<Video open={open} autoplay controls src="https://player.vimeo.com/external/374516783.hd.mp4?s=e0f8468cfb38c47b0725d7a20a11b087628ccfed&profile_id=174"/>
			</Right>
		</Container>
	)
}
 
const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
background:#f7f7f7;
 padding: 20px;
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
`;
const Title = styled.h1`
 font-size: 50px;
display: flex;
flex-direction: column;
`
const Desc = styled.p`
font-size: 20px;
margin-top: 20px;
color: #555;
 width: 80%;
`
const CardContainer = styled.div`
margin-top: 50px;
display: flex;
flex-direction: row;

`
const Left = styled.div`
width: 60%;
position: relative;
`
const Right = styled.div`
width: 40%;
`
const Image = styled.img`
width: 100%;
display: ${props => props.open && 'none'};
`;
const Video = styled.video`
display: ${props => !props.open && 'none'};
height: auto;
margin-right: 20px;
position: absolute;
top:220vh;
bottom:0;
right:0;
width: 550px; 
z-index: 9999;
padding: 4px;
border:0.2px solid gray;
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
`;
export default Service
