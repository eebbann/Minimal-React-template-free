import React from 'react'
import styled  from 'styled-components';

function Intro() {
	return (
		<Container>
		<Left>l</Left>
		<Right>r</Right>

		</Container>
	)
}

//styled-components
 const Container = styled.div`
	height: calc(100vh-50px);
	display:flex;
	background-color: red;
	`
	 const Left = styled.div`
	 width:60%
	 `
	  const Right = styled.div`
		width:40%
		`
export default Intro
