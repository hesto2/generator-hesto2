import React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { CustomTheme } from '../../../types';
import { useSignupFormLogic } from './useSignupFormLogic';
import {
  Button,
  Checkbox,
  Link,
  TextField,
  Typography,
} from '@material-ui/core';
import CheckboxInput from '../../CheckboxInput/CheckboxInput';

const useStyles = makeStyles((theme: CustomTheme) =>
  createStyles({
    container: { maxWidth: 500 },
    button: { marginRight: 'auto' },
  })
);
interface SignupFormProps {
  hideOauthButtons?: boolean;
  onSignup: VoidFunction;
}

const SignupForm = ({ hideOauthButtons, onSignup }: SignupFormProps) => {
  const classes = useStyles();
  const {
    formData,
    handleChangeValue,
    onSubmit,
    apiResponse,
    hasSubmitted,
    validation,
  } = useSignupFormLogic({ onSignup });

  return (
    <form onSubmit={onSubmit} className={classes.container}>
      <TextField
        fullWidth
        variant={'outlined'}
        label="Name"
        name="name"
        onChange={handleChangeValue}
        error={hasSubmitted && Boolean(validation.name)}
        helperText={hasSubmitted && validation.name}
      />
      <TextField
        fullWidth
        variant={'outlined'}
        label="Email"
        type="email"
        name="email"
        onChange={handleChangeValue}
        error={hasSubmitted && Boolean(validation.email)}
        helperText={hasSubmitted && validation.email}
      />
      <TextField
        fullWidth
        variant={'outlined'}
        label="Zip Code"
        type="zip"
        name="zip"
        onChange={handleChangeValue}
        error={hasSubmitted && Boolean(validation.zip)}
        helperText={hasSubmitted && validation.zip}
      />
      <TextField
        fullWidth
        type="password"
        variant={'outlined'}
        label="Password"
        name="password"
        onChange={handleChangeValue}
        error={hasSubmitted && Boolean(validation.password)}
        helperText={hasSubmitted && validation.password}
      />
      <CheckboxInput
        checked={formData.terms}
        onChange={handleChangeValue}
        name="terms"
        label={
          <>
            By creating an account, I agree to the{' '}
            <Link href="/terms" target="_blank">
              TERMS OF USE{' '}
            </Link>
            and{' '}
            <Link target="_blank" href="/privacy">
              PRIVACY POLICY
            </Link>
            .
          </>
        }
      />
      <Button
        variant="contained"
        color="primary"
        disabled={apiResponse.loading || !formData.terms}
        onClick={onSubmit}
        className={classes.button}
        type="submit"
      >
        Signup
      </Button>
      <Typography color="error">{apiResponse.error}</Typography>
    </form>
  );
};

export default SignupForm;
