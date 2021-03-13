import {
  forgotPasswordComplete,
  forgotPasswordInit,
  login,
} from '.';
import { useActionApiCall } from '../useActionApiCall';

export const useLoginApiCall = () => {
  const result = useActionApiCall({ apiCall: login });
  return result;
};

export const useForgotPasswordInitApiCall = () => {
  const result = useActionApiCall({ apiCall: forgotPasswordInit });
  return result;
};

export const useForgotPasswordCompleteApiCall = () => {
  const result = useActionApiCall({
    apiCall: forgotPasswordComplete,
  });
  return result;
};
