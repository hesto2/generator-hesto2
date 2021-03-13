import {
  createUser,
  CreateUserBody,
  deleteUser,
  getMe,
  getUsers,
  GetUsersVariables,
  updateUser,
} from '.';
import { useActionApiCall } from '../useActionApiCall';
import { useApiCall, UseApiOptions } from '../useApiCall';

export const useGetUsersApiCall = (
  variables: GetUsersVariables,
  options?: UseApiOptions
) => {
  const result = useApiCall({ apiCall: getUsers, variables, ...options });
  return result;
};

export const useCreateUserApiCall = (options?: UseApiOptions) => {
  const result = useActionApiCall({
    apiCall: createUser,
    ...options,
  });
  return result;
};

export const useGetMeApiCall = (options?: UseApiOptions) => {
  const result = useApiCall({ apiCall: getMe, variables: {}, ...options });
  return result;
};

export const useUpdateUserApiCall = (options?: UseApiOptions) => {
  const result = useActionApiCall({ apiCall: updateUser, ...options });
  return result;
};

export const useDeleteUserApiCall = (options?: UseApiOptions) => {
  const result = useActionApiCall({ apiCall: deleteUser, ...options });
  return result;
};
