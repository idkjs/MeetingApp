import React, { useState, useEffect } from 'react'
import SideNav from '../../components/SideNav'
import Modal from '../../components/Modal'
import List from '../../components/List'

import { getAvailableTimeSlots, bookMeeting } from '../../services/meetings'

const Booking = (props) => {
  const [error, setError] = useState(false)
  const [data, setData] = useState()
  const [availableTimeSlots, setAvailableTimeSlots] = useState()

  useEffect(() => {
    const getTimeSLots = async () => {
      try {
        const timeSlots = await getAvailableTimeSlots()
        setAvailableTimeSlots(timeSlots.data)
      } catch (error) {
        setError(error)
      }
    }

    getTimeSLots()
  }, [])

  const handleOnchange = event => {
    const { name, value } = event.target
    setData({ ...data, [name]: value })
  }

  const onSubmit = (item) => async (event) => {
    const payload = { ...data, id: item.id }
    try {
      event.preventDefault()
      await bookMeeting(payload)
      window.location.reload()
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className='row'>
      <div className='col-2 side-nav'>
        <SideNav {...props} />
      </div>
      <div className='col-10'>
        {availableTimeSlots && availableTimeSlots.length > 0
          ? <List
            items={availableTimeSlots}
            label='Book A Meeting'
            type='book'
            handleOnchange={handleOnchange}
            onSubmit={onSubmit}
            error={error}
            />
          : <h1 className='no-slot'>No Available Time Slot</h1>}
      </div>
    </div>

  )
}

export default Booking
