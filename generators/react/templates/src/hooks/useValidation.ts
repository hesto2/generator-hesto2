import { useState } from 'react';

export type ValidationFieldsMap<T> = {
  [key in keyof T]: string | number | boolean; // Currently just checks if it is present or not
};

export type ValidationReturn<T> = {
  fields: { [key in keyof T]: string | number | boolean | null };
  valid: boolean;
  onSubmit: () => void;
  hasSubmitted: boolean;
};

export const useValidation = <T>(
  fieldsMap: ValidationFieldsMap<T>
): ValidationReturn<T> => {
  let valid = true;
  const fields: any = {};
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const handleSubmit = () => setHasSubmitted(true);
  Object.keys(fieldsMap).forEach((field) => {
    if (
      fieldsMap[field as keyof ValidationFieldsMap<T>] !== null &&
      fieldsMap[field as keyof ValidationFieldsMap<T>] !== undefined &&
      fieldsMap[field as keyof ValidationFieldsMap<T>] !== ''
    ) {
      fields[field] = null;
    } else {
      fields[field] = 'Value is required';
      valid = false;
    }
  });

  return { valid, fields, onSubmit: handleSubmit, hasSubmitted };
};
