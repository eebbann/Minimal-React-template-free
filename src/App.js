 import React from 'react'
 import styled from 'styled-components'
import Intro from './components/Intro.js';
import Navbar from './components/Navbar.js';

const Container = styled.div`
height: 100vh;
`
function App() {
  return (
    <Container >
        <Navbar/>
				<Intro />
    </Container>
  );
}

export default App;
