import React from 'react'
import styled from 'styled-components'


function Footer() {
	return (
		<Container>
		<Copy>©eebann 2021 Free react template</Copy>
		</Container>
	)
}
const Container = styled.div`
width: 100%;
height: 100%;
background: black;
display: flex;
justify-content: center;
 
`;
const Copy = styled.p`
color: white;
font-size: 13px;
letter-spacing: 1px;
padding: 20px;
`;

export default Footer
