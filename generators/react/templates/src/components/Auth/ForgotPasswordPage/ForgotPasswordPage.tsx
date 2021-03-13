import React, { FormEvent, useEffect, useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { CustomTheme } from '../../../types';
import { Button, TextField, Typography } from '@material-ui/core';
import LoginForm from '../LoginForm/LoginForm';
import ContentPageLayout from '../../../layouts/ContentPageLayout';
import { RouteComponentProps, useHistory } from 'react-router';
import { AppRoutes } from '../../../constants/routes';
import SignupForm from '../SignupForm/SignupForm';
import { Link } from 'react-router-dom';
import { useForgotPasswordInitApiCall } from '../../../api/auth/hooks';

const useStyles = makeStyles((theme: CustomTheme) =>
  createStyles({
    container: {
      maxWidth: 500,
    },
  })
);

const ForgotPasswordPage = (props: RouteComponentProps) => {
  const classes = useStyles();
  const history = useHistory();
  const forgotPasswordApiCall = useForgotPasswordInitApiCall();
  const [complete, setComplete] = useState<boolean>(false);

  const [email, setEmail] = useState<string>('');
  const onSubmit = (e?: FormEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    forgotPasswordApiCall.runApiCall({ email });
    setComplete(true);
  };

  return (
    <ContentPageLayout title={'Password Recovery'}>
      <form className={classes.container}>
        <TextField
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          label="Email"
          variant="outlined"
        />
        <Button
          disabled={!email || forgotPasswordApiCall.loading}
          onClick={onSubmit}
          color="primary"
          variant="contained"
          type="submit"
        >
          Send Email
        </Button>
        {complete && (
          <div>
            <Typography>
              Check your email for a password reset link (this can take up to 5
              minutes)
            </Typography>
          </div>
        )}
        <Typography variant="caption" color="error">
          {forgotPasswordApiCall.error}
        </Typography>
      </form>
    </ContentPageLayout>
  );
};

export default ForgotPasswordPage;
