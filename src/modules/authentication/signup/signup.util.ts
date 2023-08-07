import * as Yup from 'yup';


export interface ISignUpFormValues {
  email: string;
  name: string;
  lastName: string;
  username: string;
  password: string;
}

export const SIGN_UP_FORM_SCHEMA = Yup.object().shape({
  email: Yup.string().required('required').email(),
  name: Yup.string().required('required').max(60),
  lastName: Yup.string().required('required').max(60),
  username: Yup.string().required('required').min(4).max(60),
  password: Yup.string().required('required').min(10).max(60),
});

export const INITIAL_SIGN_UP_VALUES: ISignUpFormValues = {
    email: '',
    name: '',
    lastName: '',
    username: '',
    password: '',
};