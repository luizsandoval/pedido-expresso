import * as yup from 'yup';

export const productSchema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    price: yup
        .number()
        .moreThan(0, 'Digite um preço válido')
        .required('O preço é obrigatório'),
    photo: yup.object().shape({
        url: yup.string(),
        publicId: yup.string(),
    }),
});
