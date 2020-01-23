import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap'
import './Auth.css'

import { Login, SignUp } from '../../services/auth'

const Auth = (props) => {
  const [data, setData] = useState()
  const [error, setError] = useState()

  const handleOnchange = event => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      if (!data.email && !data.password) {
        throw new Error('Enter your email and password')
      } else {
        await AuthAction(data)
        window.location.reload()
      }
    } catch (error) {
      setError(error.message)
    }
  }

  const AuthAction = (payload) => {
    return props.type == 'signUp' ? SignUp(payload) : Login(payload)
  }

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert color='danger'>
        {error}
      </Alert>}
      <FormGroup>
        <Label for='email'>Email</Label>
        <Input type='email' name='email' id='email' placeholder='Enter Email' onChange={handleOnchange} autoComplete='username' required />
      </FormGroup>
      <FormGroup>
        <Label for='password'>Password</Label>
        <Input type='password' name='password' id='password' placeholder='Enter Password' autoComplete='current-password' onChange={handleOnchange} required />
      </FormGroup>
      <Button color='success'>Submit</Button>
    </Form>
  )
}

export default Auth
