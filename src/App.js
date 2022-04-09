import Container from '@material-ui/core/Container';
import { useState } from 'react';
import SignIn from './components/SignIn';
import Home from './components/Home';

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(0);
  return (
    <Container style={{ height: '100vh' }}>
      {isSignedIn ? <Home /> : <SignIn onSignIn={() => setIsSignedIn(true)} />}
    </Container>
  );
};

export default App;
