
import './App.css';

import {Container, Navbar} from 'react-bootstrap';

// import Counter from './Components/Counter';

import Register from './Components/Registration';

const App = () => {
  return (
    <>
     <Navbar bg='dark' expand='sm' variant='dark'>
     <Container>
        <Navbar.Brand href='/'>React Bootstrap</Navbar.Brand>
     </Container>
     </Navbar>
     {/* <Counter></Counter> */}
     <Register></Register>
    </>
  );
}

export default App;
