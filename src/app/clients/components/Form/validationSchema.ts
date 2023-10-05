import { cnpj } from 'cpf-cnpj-validator';
import * as yup from 'yup';

export const clientSchema = yup.object().shape({
    name: yup.string().required('A razão social é obrigatória'),
    cnpj: yup
        .string()
        .required('O CNPJ é obrigatório')
        .test(
            'cnpj',
            'CNPJ inválido',
            (value) => !!value && cnpj.isValid(value),
        ),
});
