import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Schema from './Schema'
import axios from 'axios'
import * as yup from 'yup'
import User from './User'
//styling
const MainDiv = styled.div`
padding:5px;
margin: 2rem 40vh;
height: 70vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;
background-color: #42bfdd;
box-shadow:10px 10px 5px #1C829C;
`
const MLabel = styled.label`
font-size:2rem;
display:flex;
padding: 2px;
margin:.3rem;
`

const ERRDIV = styled.div`
font-size:1.7rem;
display:flex;
padding: 2px;
margin:.3rem;
color:red;
`

export default function Form(){
    //Setting initail values for the form
    const initalTValue = true
    const initailFormValues = {
    name: "",
    email: "",
    password: "",
    tos: false,
    }
    const [users, setUsers] = useState([])
    const [disabled, setDisabled] = useState(initalTValue)
    const [formValues, setFormValues] = useState(initailFormValues)
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        tos: "",
    })

    //on change and on submit functions
    const change = e => {
        const {checked, name, type, value} = e.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormValues({...formValues, [name]: valueToUse})
        hadleSetErrors(name, valueToUse)
    }
    const submit = e => {
        e.preventDefault()
        const newUser = {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            password: formValues.password.trim(),
        }
        axios.post("https://reqres.in/api/users", newUser)
            .then(res => {
                // setUsers(...users, [res.data])
                setUsers([...users, res.data])
                setFormValues(initailFormValues)
            }).catch(err => {
                console.log('ERROR: ', (err))
            })
    }

    //hadeling the errors
    const hadleSetErrors = (name, value) => {
        yup.reach(Schema, name).validate(value)
            .then(() => setErrors({...errors, [name]: ''}))
            .catch(err => {setErrors({...errors, [name]: err.errors[0]})})
    }

    //schema check
    useEffect(() => {
        Schema.isValid(formValues)
            .then(valid => {
                setDisabled(!valid)
            }).catch(err => {
                console.log(err)
            })
    }, [formValues])

    console.log('user: ',users)
    return(
        <div>
            <MainDiv>
                <form onSubmit={submit}>
                    <ERRDIV>
                        {errors.name.length === 0 ? null : <pre>{errors.name}</pre>}
                    </ERRDIV>

                    <MLabel>Name 
                        <input value={formValues.name} name='name' type='text' onChange={change}/>
                     </MLabel>

                     <ERRDIV>
                        {errors.email.length === 0 ? null : <pre>{errors.email}</pre>}
                    </ERRDIV>

                     <MLabel>Email 
                        <input value={formValues.email} name='email' type='text' onChange={change}/>
                    </MLabel>

                    <ERRDIV>
                        {errors.password.length === 0 ? null : <pre>{errors.password}</pre>}
                    </ERRDIV>

                    <MLabel>Password 
                        <input value={formValues.password} name='password' type='password' onChange={change}/>
                    </MLabel>

                    <ERRDIV>
                        {errors.tos.length === 0 ? null : <pre>{errors.tos}</pre>}
                    </ERRDIV>

                    <MLabel>Sell Data
                        <input checked={formValues.tos} value={formValues.tos} name='tos' type='checkbox' onChange={change}/>
                    </MLabel>

                    <MLabel>
                        <input disabled={disabled} type='submit'/>
                    </MLabel>
                    <MLabel>
                        
                    </MLabel>
                </form>
            </MainDiv>
            <MLabel>
                {users.map(data => <User name={data.name} email={data.email}/>)}
            </MLabel>
        </div>
    )
}