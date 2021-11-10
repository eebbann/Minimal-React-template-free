import React from 'react'
import styled from 'styled-components'

const Minicard = ({icon}) => {
	return (
		<Container>
			<Card>
				<Img src={icon} alt='icon' />
        <Space>Working with state of the art design and creative patterns to bring out uniquness</Space>
			</Card>
		</Container>
	)
}
const Container = styled.div`
width:100%;
display:flex;
justify-content: space-between;
`
const Card = styled.div`
width:100px;
border-radius: 10px;
box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.45);
padding: 20px;
`
const Space = styled.p`
font-size:14px;
font-weight: lighter;

`
const Img = styled.img`
width:50%;
font-weight: lighter;

`
export default Minicard
