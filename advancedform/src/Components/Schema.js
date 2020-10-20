import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string().required('Name required'),
    email: yup.string().email().required('Email required'),
    password: yup.string().min(6).required('Must enter a password of at least 6 characters'),
    tos: yup.boolean().required().oneOf([true],'Must agree to the Terms and Conditions'),
})