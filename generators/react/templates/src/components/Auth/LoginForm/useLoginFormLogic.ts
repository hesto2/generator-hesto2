import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useLoginApiCall } from '../../../api/auth/hooks';
import { useValidation } from '../../../hooks/useValidation';
import { useSession } from '../../../providers/SessionProvider';
import { persistToken } from '../../../utils/tokenUtils';

export const useLoginFormLogic = ({ onLogin }: { onLogin?: VoidFunction }) => {
  const { runApiCall: login, ...result } = useLoginApiCall();
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const session = useSession();
  const {
    fields: validation,
    valid,
    onSubmit: handleValidationSubmit,
    hasSubmitted,
  } = useValidation({ email, password });

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);

  const handleSubmit = async (e?: FormEvent) => {
    e?.preventDefault();
    handleValidationSubmit();
    if (valid) {
      const response = await login({ password, email });
      if (response?.token) {
        session.setSession({ token: response.token });
        onLogin?.();
      }
    }
  };

  return {
    password,
    email,
    onChangePassword: handleChangePassword,
    onChangeEmail: handleChangeEmail,
    onSubmit: handleSubmit,
    validation,
    hasSubmitted,
    valid,
    apiResponse: result,
  };
};
