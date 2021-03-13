import React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { CustomTheme } from '../../../types';
import { useLoginFormLogic } from './useLoginFormLogic';
import { Button, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: CustomTheme) =>
  createStyles({
    container: { maxWidth: 500 },
    button: { marginRight: 'auto' },
  })
);
interface LoginFormProps {
  hideOauthButtons?: boolean;
  onLogin: VoidFunction;
}

const LoginForm = ({ hideOauthButtons, onLogin }: LoginFormProps) => {
  const classes = useStyles();
  const {
    email,
    onChangeEmail,
    password,
    onChangePassword,
    onSubmit,
    apiResponse,
    hasSubmitted,
    validation,
  } = useLoginFormLogic({ onLogin });

  return (
    <form onSubmit={onSubmit} className={classes.container}>
      <TextField
        fullWidth
        variant={'outlined'}
        value={email}
        label="Email"
        type="email"
        name="email"
        onChange={onChangeEmail}
        error={hasSubmitted && Boolean(validation.email)}
        helperText={hasSubmitted && validation.email}
      />
      <TextField
        fullWidth
        type="password"
        variant={'outlined'}
        value={password}
        label="Password"
        name="password"
        onChange={onChangePassword}
        error={hasSubmitted && Boolean(validation.password)}
        helperText={hasSubmitted && validation.password}
      />
      <Button
        variant="contained"
        color="primary"
        disabled={apiResponse.loading}
        onClick={onSubmit}
        className={classes.button}
        type="submit"
      >
        Login
      </Button>
      <Typography color="error">{apiResponse.error}</Typography>
    </form>
  );
};

export default LoginForm;
