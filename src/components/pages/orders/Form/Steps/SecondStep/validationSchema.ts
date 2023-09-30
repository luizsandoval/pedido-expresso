import * as yup from 'yup';

export const secondStepSchema = yup.object().shape({
    items: yup
        .array()
        .required()
        .min(1)
        .of(
            yup.object().shape({
                product: yup.object().shape({
                    _id: yup.string().required(),
                    name: yup.string().required(),
                    price: yup.number().required(),
                }),
                quantity: yup.number().required(),
            }),
        ),
});
