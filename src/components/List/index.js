import React from 'react'
import { ListGroup, ListGroupItem, Badge, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap'
import moment from 'moment'
import Modal from '../Modal'

import './List.css'

const List = ({ items, label, type, handleOnchange, onSubmit, error }) => {
  return (
    <ListGroup>
      <h2>{label}</h2>
      {items.map((item, index) => (
        <ListGroupItem className='justify-content-between' key={index}>
          <span>
            {type === 'meetings' &&
            <div>Title: <label>{item.title}</label></div>}
            {moment(item.date).format('MMMM, D')},
            {moment(item.startTime, 'HH:mm:ss').format('hh:mm A')}  -
            {moment(item.endTime, 'HH:mm:ss').format('hh:mm A')}
          </span>

          {type === 'book'
            ? <Modal buttonLabel='Book' modalTitle='Book A Meeting' buttonColor='primary'>
              <Form onSubmit={onSubmit(item)}>
                {error && <Alert color='danger'>
                  {error}
                          </Alert>}
                <FormGroup>
                  <Label for='exampleDate'>Title</Label>
                  <Input
                    type='text'
                    name='title'
                    id='exampleDate'
                    placeholder='Title'
                    onChange={handleOnchange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='description'>Description</Label>
                  <Input
                    type='textarea'
                    name='description'
                    id='description'
                    onChange={handleOnchange}
                  />
                </FormGroup>
                <Button color='primary'>Submit</Button>
              </Form>
              </Modal>
            : type !== 'meetings'
            ? <Badge pill className={`float-right ${item.booked && 'booked'}`}>
                {item.booked ? 'Booked' : 'Available'}
              </Badge> : <span />}

        </ListGroupItem>
      ))}
    </ListGroup>
  )
}

export default List
