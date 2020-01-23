import React, { useState, useEffect } from 'react'
import SideNav from '../../components/SideNav'
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap'
import Modal from '../../components/Modal'
import List from '../../components/List'

import { addTimeSLot, getUserTimeSlots } from '../../services/meetings'

import './TimeSlots.css'

const TimeSLots = (props) => {
  const [data, setData] = useState()
  const [error, setError] = useState(false)
  const [timeSlots, setTimeSlots] = useState()

  useEffect(() => {
    const getTimeSLots = async () => {
      try {
        const userTimeSlots = await getUserTimeSlots()
        setTimeSlots(userTimeSlots.data)
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

  const onSubmit = async (event) => {
    try {
      event.preventDefault()
      await addTimeSLot(data)
      window.location.reload()
    } catch (error) {
      setError(error)
    }
  }
  return (
    <div className='row'>
      <div className='col-2 side-nav'>
        <SideNav {...props} />
      </div>
      <div className='col-10'>
        <div className='row time-slot content'>
          <div className='col-10'>
            { timeSlots && timeSlots.length > 0 ? <List items={timeSlots} label='Time Slot'/> : <h1 className='no-slot'>No Time Slot</h1>}
          </div>
          <div className='col-2'>
            <Modal buttonLabel='Create Time Slot' modalTitle='Create Time Slot' buttonColor='primary'>
              <Form onSubmit={onSubmit}>
                {error && <Alert color='danger'>
                  {error}
                  </Alert>}
                <FormGroup>
                  <Label for='exampleDate'>Date</Label>
                  <Input
                    type='date'
                    name='date'
                    id='exampleDate'
                    placeholder='date'
                    onChange={handleOnchange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='exampleTime'>Start Time</Label>
                  <Input
                    type='time'
                    name='startTime'
                    id='exampleTime'
                    placeholder='start time'
                    onChange={handleOnchange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='exampleTime'>End Time</Label>
                  <Input
                    type='time'
                    name='endTime'
                    id='exampleTime'
                    placeholder='end time'
                    onChange={handleOnchange}
                  />
                </FormGroup>
                <Button color='primary'>Submit</Button>
              </Form>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeSLots
