import { fetcher, HTTPMethod } from '../../utils/fetcher';
import { AuthResponse } from '../auth';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

export type User = {
  _id: string;
  createdAt: string;
  email: string;
  industry: string | null;
  info?: {
    purchased?: boolean;
    subscription_level?: string;
  };
  profile: {
    name: string;
    role: UserRole;
  };
  provider: string;
  role: UserRole;
  subscription_end_date?: string;
  subscription_start_date?: string;
  subscription_status?: string;
  subscription_type?: string;
  zip?: string;
};

export type GetMeResponse = User;

export type GetUsersResponse = {
  users: User[];
  pageInfo: { total: number; ofset: number; hasNextPage: boolean };
};

export const getMe = async (): Promise<GetMeResponse> => {
  const result = await fetcher<GetMeResponse>('/users/me', {
    method: HTTPMethod.GET,
  });
  const response = await result.json();
  return response;
};

export type GetUsersVariables = {
  offset?: number;
  name?: string;
  email?: string;
  subscription_type?: string;
};

export const getUsers = async ({
  offset = 0,
  name,
  email,
  subscription_type,
}: GetUsersVariables): Promise<GetUsersResponse> => {
  let queryString = `?offset=${offset}`;
  if (name) {
    queryString += `&name=${name}`;
  }
  if (email) {
    queryString += `&email=${email}`;
  }
  if (subscription_type) {
    queryString += `&subscription_type=${subscription_type}`;
  }
  const result = await fetcher<GetUsersResponse>(`/users${queryString}`, {
    method: HTTPMethod.GET,
  });
  const response = await result.json();
  return response;
};

export type UpdateUserBody = {
  _id: string;
} & Partial<User>;

export type UpdateUserResponse = User;

export const updateUser = async (
  body: UpdateUserBody
): Promise<UpdateUserResponse> => {
  const result = await fetcher<UpdateUserResponse>('/users', {
    method: HTTPMethod.PUT,
    body,
  });
  const response = await result.json();
  return response;
};

export type CreateUserBody = {
  email: string;
  industry?: string;
  name: string;
  password: string;
  terms: boolean;
  zip: string;
};

export type CreateUserResponse = AuthResponse;

export const createUser = async (
  body: CreateUserBody
): Promise<CreateUserResponse> => {
  const result = await fetcher<CreateUserResponse>('/users', {
    method: HTTPMethod.POST,
    body,
  });
  const response = await result.json();
  return response;
};

export type DeleteUserBody = {
  _id: string;
};

export type DeleteUserResponse = null;

export const deleteUser = async ({
  _id,
}: DeleteUserBody): Promise<DeleteUserResponse> => {
  await fetcher<DeleteUserResponse>(`/users/${_id}`, {
    method: HTTPMethod.DELETE,
  });
  return null;
};
