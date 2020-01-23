import * as jwtDecode from 'jwt-decode'
import http from '../utils/http'

export const addTimeSLot = async (data) => {
  try {
    const user = await getUser()

    const payload = {
      ...data,
      userId: user.id,
      booked: false,
      booked_by: null,
      title: '',
      description: ''
    }

    await http.post('/appointments', payload)
  } catch (error) {
    throw new Error(error)
  }
}

export const getUserTimeSlots = async () => {
  try {
    const user = await getUser()

    const users = await http.get(`/appointments?userId=${user.id}`)
    return users
  } catch (error) {
    throw new Error(error)
  }
}

export const getAvailableTimeSlots = async () => {
  const user = await getUser()

  const availableSlots = http.get(`/appointments?userId_ne=${user.id}&booked=${false}`)
  return availableSlots
}

export const bookMeeting = async (data) => {
  const user = await getUser()

  const payload = {
    ...data,
    booked: true,
    bookedBy: user.id
  }
  const meeting = await http.patch(`/appointments/${payload.id}`, { ...payload })
  return meeting
}

export const getAllAppointments = async () => {
  const user = await getUser()

  const allAppointments = http.get(`/appointments?bookedBy=${user.id}`)
  return allAppointments
}

const getUser = async () => {
  const getToken = localStorage.getItem('userToken')
  if (!getToken) {
    throw new Error('Please Login to see your appointments')
  }

  const decodeToken = jwtDecode(getToken)
  const { data } = await http.get(`/users?email=${decodeToken.payload.email}`)

  if (!data[0]) {
    throw new Error('User not found!!!')
  }
  return data[0]
}
