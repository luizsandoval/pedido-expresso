import * as yup from 'yup';

export const firstStepSchema = yup.object().shape({
    client: yup
        .object()
        .shape({
            _id: yup.string().required(),
            name: yup.string().required(),
            cnpj: yup.string().required(),
        })
        .required(),
});
