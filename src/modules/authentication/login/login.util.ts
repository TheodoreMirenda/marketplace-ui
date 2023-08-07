import * as Yup from 'yup';


export interface ILoginFormValues {
  email: string;
  password: string;
}

export const LOGIN_FORM_SCHEMA = Yup.object().shape({
  email: Yup.string().required('required'),
  password: Yup.string().required('required'),
});

export const INITIAL_LOGIN_VALUES: ILoginFormValues = {
    email: '',
    password: '',
};