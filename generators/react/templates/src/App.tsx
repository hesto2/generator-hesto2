import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import { Route, useHistory, Redirect } from 'react-router-dom';
import AppContent from './components/AppContent';
import { useSession } from './providers/SessionProvider';
import LandingPage from './components/LandingPage/LandingPage';
import Footer from './components/Footer/Footer';
import LoginPage from './components/Auth/LoginPage/LoginPage';
import { AppRoutes } from './constants/routes';
import { CircularProgress } from '@material-ui/core';
import LogoutPage from './components/Auth/LogoutPage';
import SignupPage from './components/Auth/SignupPage/SignupPage';
import ForgotPasswordPage from './components/Auth/ForgotPasswordPage/ForgotPasswordPage';
import ResetPasswordPage from './components/Auth/ResetPasswordPage.tsx/ResetPasswordPage';

function App() {
  const session = useSession();
  return session.loading ? (
    <CircularProgress />
  ) : (
    <div>
      <Header />
      <AppContent>
        <Route exact path={AppRoutes.LANDING} component={LandingPage} />
        <Route exact path={AppRoutes.LOGIN} component={LoginPage} />
        <Route exact path={AppRoutes.SIGNUP} component={SignupPage} />
        <Route exact path={AppRoutes.LOGOUT} component={LogoutPage} />
        <Route
          exact
          path={AppRoutes.FORGOT_PASSWORD}
          component={ForgotPasswordPage}
        />
        <Route
          exact
          path={AppRoutes.RESET_PASSWORD}
          component={ResetPasswordPage}
        />
      </AppContent>
      <Footer />
    </div>
  );
}

export default App;
