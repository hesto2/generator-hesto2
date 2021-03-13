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
import { useForgotPasswordCompleteApiCall } from '../../../api/auth/hooks';
import { parse } from 'query-string';

const useStyles = makeStyles((theme: CustomTheme) =>
  createStyles({
    container: {
      maxWidth: 500,
    },
  })
);

const ResetPasswordPage = (props: RouteComponentProps) => {
  const classes = useStyles();
  const resetPasswordApiCall = useForgotPasswordCompleteApiCall();
  const [complete, setComplete] = useState<boolean>(false);
  const history = useHistory();

  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const onSubmit = (e?: FormEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    const { token } = parse(props.location.search);
    resetPasswordApiCall.runApiCall({ password, token: token as string });
    setComplete(true);
    setTimeout(() => {
      history.push(AppRoutes.LOGIN);
    }, 500);
  };

  return (
    <ContentPageLayout title={'Reset Password'}>
      <form className={classes.container}>
        <TextField
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
        />
        <TextField
          name="confirmpassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
          label="Confirm Password"
          type="password"
          variant="outlined"
        />
        <Button
          disabled={
            !password ||
            confirmPassword !== password ||
            resetPasswordApiCall.loading
          }
          onClick={onSubmit}
          color="primary"
          variant="contained"
          type="submit"
        >
          Reset Password
        </Button>
        {complete && (
          <div>
            <Typography>Your password has been reset!</Typography>
          </div>
        )}
        <Typography variant="caption" color="error">
          {resetPasswordApiCall.error}
        </Typography>
      </form>
    </ContentPageLayout>
  );
};

export default ResetPasswordPage;
