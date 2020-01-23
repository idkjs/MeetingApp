import { generateToken } from '../utils/helper'
import http from '../utils/http'

export const Login = async (payload) => {
  try {
    const { email, password } = payload
    const user = await http.get(`/users?email=${email}&password=${password}`)
    if (user.data.length <= 0) {
      throw new Error('User Not Found')
    }
    const token = await generateToken(payload)
    localStorage.setItem('userToken', token)
  } catch (error) {
    throw new Error(error)
  }
}

export const SignUp = async (payload) => {
  try {
    const userExist = await checkUserExist(payload.email)
    if (userExist) {
      throw new Error('User Exit')
    }
    await http.post('/users', payload)
    const token = await generateToken(payload)

    localStorage.setItem('userToken', token)
  } catch (error) {
    throw new Error(error)
  }
}

export const Logout = () => {
  localStorage.removeItem('userToken')
}

export const checkUserExist = async (email) => {
  const { data } = await http.get(`/users?email=${email}`)
  console.log(data.length, 'length')
  return Boolean(data.length)
}
