import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone_number: Yup.string()
    .matches(/^\d{11}$/, 'Phone number must have 11 digits')
    .required('Phone number is required'),
  message: Yup.string().required('Message is required'),
});