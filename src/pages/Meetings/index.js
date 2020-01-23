import React, { useState, useEffect } from 'react'
import SideNav from '../../components/SideNav'
import List from '../../components/List'
import { getAllAppointments } from '../../services/meetings'
import { Alert } from 'reactstrap'

const Meetings = (props) => {
  const [error, setError] = useState(false)
  const [appointments, setAppointments] = useState()

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const result = await getAllAppointments()
        setAppointments(result.data)
      } catch (error) {
        setError(error.message)
      }
    }

    getAppointments()
  }, [])

  return (
    <div className='row'>
      <div className='col-2 side-nav'>
        <SideNav {...props} />
      </div>
      <div className='col-10'>
        {error && <Alert color='danger'>
          {error}
        </Alert>}
        {appointments && appointments.length > 0 ? <List items={appointments} label='Meetings' type='meetings'/> : <h1 className='no-slot'>No Appointment Slot</h1>}
      </div>
    </div>
  )
}

export default Meetings
