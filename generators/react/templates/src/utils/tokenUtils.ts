export const persistToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const getToken = (): string | null => {
  return localStorage.getItem('token');
};

export const clearToken = () => {
  localStorage.removeItem('token');
};
