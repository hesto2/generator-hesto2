import { ChangeEvent, FormEvent, useState } from 'react';
import { CreateUserBody } from '../../../api/users';
import { useCreateUserApiCall } from '../../../api/users/hooks';
import { useValidation } from '../../../hooks/useValidation';
import { useSession } from '../../../providers/SessionProvider';
import { persistToken } from '../../../utils/tokenUtils';
import { CheckBoxInputChangeEvent } from '../../CheckboxInput/CheckboxInput';

export const useSignupFormLogic = ({
  onSignup,
}: {
  onSignup?: VoidFunction;
}) => {
  const { runApiCall: signup, ...result } = useCreateUserApiCall();
  const [formData, setFormData] = useState<CreateUserBody>({
    name: '',
    password: '',
    email: '',
    terms: false,
    zip: '',
  });
  const {
    fields: validation,
    valid,
    onSubmit: handleValidationSubmit,
    hasSubmitted,
  } = useValidation(formData);
  const session = useSession();

  const handleChangeValue = (
    event: ChangeEvent<any> | CheckBoxInputChangeEvent
  ) => setFormData({ ...formData, [event.target.name]: event.target.value });

  const handleSubmit = async (e?: FormEvent) => {
    e?.preventDefault();
    handleValidationSubmit();
    if (valid) {
      const response = await signup(formData);
      if (response?.token) {
        session.setSession({ token: response.token });
        onSignup?.();
      }
    }
  };

  return {
    formData,
    handleChangeValue,
    onSubmit: handleSubmit,
    validation,
    hasSubmitted,
    valid,
    apiResponse: result,
  };
};
