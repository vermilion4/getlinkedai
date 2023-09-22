import * as Yup from 'yup';

export const registrationSchema = Yup.object().shape({
  team_name: Yup.string()
    .required('Team name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone_number: Yup.string()
    .matches(/^\d{11}$/, 'Phone number must be 11 digits')
    .required('Phone number is required'),
  group_size: Yup.string()
    .required('Group size is required'),
  project_topic: Yup.string()
    .required('Project topic is required'),
  category: Yup.string()
    .required('Category is required'),
  privacy_policy_accepted: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions and privacy policy'),
});