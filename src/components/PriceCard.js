import React from 'react'
import styled from 'styled-components'

function PriceCard( {price, type}) {
	return (
		<Container>
			<PriceContainer>
				$<Price>{price}</Price>/month
				</PriceContainer>
				<Type> {type}</Type>
				<List>
					<ListItem>200 HandCrafted  Template</ListItem>
					<ListItem>Exclusive Support</ListItem>
					<ListItem>50+ Prebuilt Websites</ListItem>
					<ListItem>Premium Plugins</ListItem> 
				</List>
				<Button>Get Started</Button> 
			
		</Container>
	)
}
const Container = styled.div`
display: flex;
flex-direction: column;  
padding: 20px;
justify-content: center;
box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.55);
border-radius: 10px;
margin: 30px;
background-color: white;

`
const PriceContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;
padding: 10px;
`;

const Price = styled.span`
font-weight:bolder;
font-size:40px;
display:flex;
align-items: center;
justify-content: center;

`
const Type = styled.button`
padding: 10px 15px;
background: white;
color: crimson;
border-radius: 10px;
border: 1px solid crimson;
font-weight: bold;
`
const List = styled.ul`
list-style: none;
`
const ListItem = styled.li`
margin: 30px;
`
const Button = styled.button`
border: none;
background: darkblue;
padding: 10px 15px;
color: white;	
border-radius: 10px;

`


export default PriceCard
