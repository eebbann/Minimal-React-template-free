import React from 'react'
import styled from 'styled-components';


const Navbar= ()=> {
	return (
		<Contain>
			<Wrapper>
				<Left>	
				  <Logo>Migimal</Logo>
           <Menu>
						<MenuItem>Home</MenuItem>
						<MenuItem>About</MenuItem>
						<MenuItem>Portfolio</MenuItem>
						<MenuItem>contact</MenuItem>
					</Menu>
				</Left>
			
				<Button>Join Us</Button>

			</Wrapper>
		</Contain>
	)
}


	const Contain = styled.div`
	height: 50px;
  padding:4px 20px
	`;
	const Wrapper = styled.div`
	color: black;
	display:flex;
	justify-content: space-between;
	align-items:center;
	`;
	const Left = styled.div`
	width:60px;
	display: flex;
	align-items: center;
  justify-content: space-between;  
`;

	const Logo = styled.h1`
	font-weight: bolder;
	text-decoration: underline crimson
	`;
	const Menu = styled.ul`
	display: flex;
	margin-left:10vw;
	align-items:center;
	`;

	const MenuItem = styled.ul`
	color: ash;
	font-weight: bolder;
 
	`;
	const Button = styled.button`
	color:white;
	border: 1px solid white;
	background:crimson;
	font-weight: bold;
	border-radius: 10px;
	cursor: pointer;
	padding: 10px 15px;
	letter-spacing: 2px;

	`

export default Navbar
