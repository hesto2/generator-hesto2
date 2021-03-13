import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { AppRoutes } from '../../constants/routes';
import { useSession } from '../../providers/SessionProvider';

const LogoutPage = () => {
  const session = useSession();
  const history = useHistory();
  useEffect(() => {
    session.setSession({ token: null });
    history.push(AppRoutes.LANDING);
  }, []);
  return <></>;
};
export default LogoutPage;
