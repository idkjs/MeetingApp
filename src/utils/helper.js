import jwt from 'jsonwebtoken'

const secret = process.env.REACT_APP_SECRET

export const isAuthenticated = () => {
  const sessionId = localStorage.getItem('userToken')
  return !!sessionId
}

export const generateToken = (payload) => {
  const token = jwt.sign({ payload }, secret, {
    expiresIn: '24h'
  });

  return token
}
