import { string } from 'yup'

export const firstNameField = string()
  .required('First name is required.')
  .min(2, 'First name is too Short. Enter minimum 2 characters.')

export const lastNameField = string()
  .required('Last name is required.')
  .min(2, 'Last name is too Short. Enter minimum 2 characters.')

export const emailField = string()
  .required('Email address is required.')
  .email('Enter valid email address.')

export const passwordField = string()
  .min(4, 'Password is too Short. Enter minimum 4 characters.')
  .max(32, 'Password is too long. Enter maximum 32 characters.')
  .required('Password is required.')

export const confirmPasswordField = string()
  .min(4, 'Password is too Short. Enter minimum 4 characters.')
  .max(32, 'Password is too long. Enter maximum 32 characters.')
  .required('Password confirmation is required.')
  .oneOf([ref('password')], 'Passwords must match.')
