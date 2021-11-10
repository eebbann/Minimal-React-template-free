import React from 'react'
import styled  from 'styled-components'
import PriceCard from './PriceCard';
const Price = () => {
	return (
		<Container>
			<PriceCard price='30' type="Basic"/>
			<PriceCard price='50' type="Standard"/>
			<PriceCard price='90' type="Advanced"/>
      

 	</Container>
	)
}

const Container = styled.div`
width:100%;
height: 100%;
display: flex;
justify-content: center;
background-color: #f5f5f5;
`
export default Price
