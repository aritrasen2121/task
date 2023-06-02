import * as yup from 'yup'

export const formSchema = yup.object().shape({
    email: yup.string().email("Please enter valid email").required(),
    password: yup.string().min(5).required()
})