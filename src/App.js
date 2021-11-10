 import React from 'react'
 import styled from 'styled-components'
import Contact from './components/Contact.js';
import Feature from './components/Feature.js';
import Footer from './components/Footer.js';
import Intro from './components/Intro.js';
import Navbar from './components/Navbar.js';
import Price from './components/Price.js';
import Service from './components/Service.js';

 

const Container = styled.div`
height: 100vh;
overflow: hidden;
`;

const ServiceShape = styled.div`
width:100px;
height: auto;
position:absolute;
top: 0;
right: 0;
z-index: -1;
clip-path: polygon(0 0,33% 0%,33% 100%,0 100%);
background-color: darkblue;
`



function App() {
  return (
	<>
    <Container >
        <Navbar/>
				<Intro />
    </Container>
		<Container>
        <Feature/> 
		</Container>
		<Container>
		  <Service/>
				<ServiceShape/> 
		</Container>
		<Container>
		<Price/>
		</Container>
		<Container>
		<Contact/>
		<Footer/>
		</Container>
	</>
  );
}

export default App;
