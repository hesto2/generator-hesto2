import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import { Route, useHistory, Redirect } from 'react-router-dom';
import AppContent from './components/AppContent';
import { useSession } from './providers/SessionProvider';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  const { session } = useSession();
  const history = useHistory();
  useEffect(() => {
    console.log(session);
    if (!session) {
      history.push('/login');
    }
  }, []);
  return (
    <div>
      <Header />
      <AppContent>
        <Route exact path="/" component={LandingPage} />
      </AppContent>
    </div>
  );
}

export default App;
