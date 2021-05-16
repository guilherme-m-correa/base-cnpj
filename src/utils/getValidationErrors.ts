import { ValidationError } from 'yup';

interface IErrors {
  [key: string]: object;
}

export default function getValidateErrors(err: ValidationError): IErrors {
  const validationErrors: IErrors = {};

  err.inner.forEach(error => {
    validationErrors[error.path] = {
      message: error.message,
      value: error.value ? error.value : '',
      errors: error.errors,
    };
  });

  return validationErrors;
}
