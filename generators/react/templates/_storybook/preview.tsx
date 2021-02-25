import React from 'react';
import Providers from '../src/Providers';

export const decorators = [
  (Story, args) => {
    return (
      <Providers>
        <Story />
      </Providers>
    );
  },
];
