import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
//styling
const MainDiv = styled.div`
padding:5px;
margin: 2rem 40vh;
height: 70vh;
border:2px solid red;
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;
`
const MLabel = styled.label`
font-size:2rem;
display:flex;
padding: 2px;
margin:.3rem;
`

export default function Form(){
    //Setting initail values for the form
    const initalTValue = true
    const [disabled, setDisabled] = useState(initalTValue)
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
        tos: false,
    })

    //on change and on submit functions
    const change = e => {
        const {checked, name, type, value} = e.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormValues({...formValues, [name]: valueToUse})
    }
    const submit = e => {
        e.preventDefault()
        console.log(formValues)
    }

    //schema check



    return(
        <div>
            <MainDiv>
                <form onSubmit={submit}>
                    <MLabel>Name 
                        <input value={formValues.name} name='name' type='text' onChange={change}/>
                     </MLabel>

                     <MLabel>Email 
                        <input value={formValues.email} name='email' type='text' onChange={change}/>
                    </MLabel>

                    <MLabel>Password 
                        <input value={formValues.password} name='password' type='text' onChange={change}/>
                    </MLabel>

                    <MLabel>Terms of service
                        <input checked={formValues.tos} value={formValues.tos} name='tos' type='checkbox' onChange={change}/>
                    </MLabel>

                    <MLabel>
                        <input type='submit'/>
                    </MLabel>
                </form>
            </MainDiv>
        </div>
    )
}