import { fetcher, HTTPMethod } from '../../utils/fetcher';

export type AuthResponse = {
  token: string;
};

export type LoginArgs = {
  email: string;
  password: string;
};

export type SignupArgs = {
  name: string;
  email: string;
  password: string;
  terms: boolean;
  industry?: string;
  zip?: string;
};

export type ForgotPasswordInitArgs = {
  email: string;
};

export type ForgotPasswordCompleteArgs = {
  password: string;
  token: string;
};

const baseEndpoint = '/auth';

export const login = async (body: LoginArgs): Promise<AuthResponse> => {
  const result = await fetcher<AuthResponse>('/local', {
    baseEndpoint,
    method: HTTPMethod.POST,
    body,
  });
  const response = await result.json();
  return response;
};

export const forgotPasswordInit = async (
  body: ForgotPasswordInitArgs
): Promise<null> => {
  await fetcher<null>('/recovery', {
    baseEndpoint,
    method: HTTPMethod.POST,
    body,
  });
  return null;
};

export const forgotPasswordComplete = async ({
  token,
  ...body
}: ForgotPasswordCompleteArgs): Promise<null> => {
  await fetcher<null>(`/recovery/${token}`, {
    baseEndpoint,
    method: HTTPMethod.POST,
    body,
  });
  return null;
};
