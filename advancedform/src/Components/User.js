import React from 'react'
import styled from 'styled-components'

const MainDiv = styled.div`
padding:1rem;
height:10rem;
margin:1rem;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
background-color:#A6DDDB;
box-shadow: 5px 5px 2.5px #89D2D0;
`

export default function User(props){
    const {name, email} = props

    return(
        <MainDiv>
            <h1>Name: {name}</h1>
            <h2>Email: {email}</h2>
        </MainDiv>
    )
}