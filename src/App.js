 import React from 'react'
 import styled from 'styled-components'
import Navbar from './components/Navbar.js';

const Container = styled.div`
height: 100vh;
`
function App() {
  return (
    <Container >
        <Navbar/>
    </Container>
  );
}

export default App;
