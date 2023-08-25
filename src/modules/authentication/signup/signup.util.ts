import * as Yup from 'yup';

export interface ISignUpFormValues {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  // avatar: string;
}

export const SIGN_UP_FORM_SCHEMA = Yup.object().shape({
  email: Yup.string().required('required').email(),
  lastName: Yup.string().required('required').max(60),
  username: Yup.string().required('required').min(4).max(60),
  password: Yup.string().required('required').min(10).max(60),
  firstName: Yup.string().required('required').max(60),
  // avatar: Yup.string().required('required'),
});

export const INITIAL_SIGN_UP_VALUES: ISignUpFormValues = {
    email: '',
    lastName: '',
    username: '',
    password: '',
    firstName: '',
    // avatar: '',
};