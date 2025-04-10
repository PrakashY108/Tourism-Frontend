import * as Yup from 'yup';
import {Strings} from '../../localization/i18n';
export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email(Strings.errors.enter_valid_email)
    .required(Strings.errors.empty_email),
  password: Yup.string()
    .min(5, Strings.errors.enter_valid_password)
    .required(Strings.errors.empty_password),
});
export const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email(Strings.errors.enter_valid_email)
    .required(Strings.errors.empty_email),
  password: Yup.string()
    .min(5, Strings.errors.enter_valid_password)
    .required(Strings.errors.empty_password),
  username: Yup.string().required(Strings.errors.enter_valid_username),
});
