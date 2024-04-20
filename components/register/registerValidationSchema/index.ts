import * as Yup from 'yup';

const eighteenYearsAgo = new Date();
eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

const registerValidationSchema = Yup.object({
  firstName: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required'),
  dateOfBirth: Yup.date()
    .required('Required')
    .nullable()
    .max(eighteenYearsAgo, 'You must be at least 18 years old'),
});

export default registerValidationSchema;