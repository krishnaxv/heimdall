import * as Yup from 'yup'

export const firstNameField = Yup.string()
  .required('First name is required.')
  .min(2, 'First name is too Short. Enter minimum 2 characters.')

export const lastNameField = Yup.string()
  .required('Last name is required.')
  .min(2, 'Last name is too Short. Enter minimum 2 characters.')

export const emailField = Yup.string()
  .required('Email address is required.')
  .email('Enter valid email address.')

export const passwordField = Yup.string()
  .min(4, 'Password is too Short. Enter minimum 4 characters.')
  .max(32, 'Password is too long. Enter maximum 32 characters.')
  .required('Password is required.')

export const confirmPasswordField = Yup.string()
  .min(4, 'Password is too Short. Enter minimum 4 characters.')
  .max(32, 'Password is too long. Enter maximum 32 characters.')
  .required('Password confirmation is required.')
  .oneOf([Yup.ref('password')], 'Passwords must match.')
