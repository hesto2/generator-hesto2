import React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { CustomTheme } from '../../../types';
import { Typography } from '@material-ui/core';
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
    <ContentPageLayout title={'Sign Up'}>
      <SignupForm onSignup={() => history.push(AppRoutes.LANDING)} />
      <div>
        <Link to={AppRoutes.LOGIN}>
          <Typography variant="overline" color="textSecondary">
            Already have an account?
          </Typography>
        </Link>
      </div>
    </ContentPageLayout>
  );
};

export default LoginPage;
