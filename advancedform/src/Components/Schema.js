import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string().required('Name required'),
    email: yup.string().required('Email required'),
    password: yup.string().required('Must enter a password'),
    tos: yup.boolean().required('Must agree to the Terms and Conditions').oneOf([true]),
})