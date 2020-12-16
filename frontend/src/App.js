import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <div>
      <Header />
      <main> 
        <Container className='py-3'> <HomeScreen /> </Container>
      </main>
      <Footer />
    </div>

  );
}

export default App;
