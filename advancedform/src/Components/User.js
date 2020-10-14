import React from 'react'
import styled from 'styled-components'

const MainDiv = styled.div`
margin:10rem;
height:10rem;
border:2px solid red;
`

export default function User(props){
    const [name, email] = props

    return(
        <MainDiv>
            <h1>{name}</h1>
            <h2>{email}</h2>
        </MainDiv>
    )
}