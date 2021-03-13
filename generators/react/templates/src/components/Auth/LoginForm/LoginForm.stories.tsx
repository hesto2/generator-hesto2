import React from 'react';
import LoginForm from './LoginForm';

export default {
  title: 'LoginForm',
  component: LoginForm,
};

export const Default = () => {
  return <LoginForm onLogin={() => null} />;
};
