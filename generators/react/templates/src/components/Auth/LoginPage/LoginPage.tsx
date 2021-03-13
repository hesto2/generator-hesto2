import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { CustomTheme } from '../../../types';
import { Typography } from '@material-ui/core';
import LoginForm from '../LoginForm/LoginForm';
import ContentPageLayout from '../../../layouts/ContentPageLayout';
import { RouteComponentProps, useHistory } from 'react-router';
import { AppRoutes } from '../../../constants/routes';
import SignupForm from '../SignupForm/SignupForm';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: CustomTheme) => createStyles({}));

const LoginPage = (props: RouteComponentProps) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <ContentPageLayout title={'Login'}>
      <LoginForm onLogin={() => history.push(AppRoutes.LANDING)} />
      <div>
        <Link to={AppRoutes.FORGOT_PASSWORD}>
          <Typography color="textSecondary" variant="overline">
            Forgot Password?
          </Typography>
        </Link>
      </div>
      <div>
        <Link to={AppRoutes.SIGNUP}>
          <Typography color="textSecondary" variant="overline">
            Need an account?
          </Typography>
        </Link>
      </div>
    </ContentPageLayout>
  );
};

export default LoginPage;
