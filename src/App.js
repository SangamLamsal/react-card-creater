import React, { useState } from 'react'
import './App.css'
import EventList from './components/EventList'
import Modal from './components/Modal'
import NewEventForm from './components/NewEventForm'
import Title from './components/Title'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModal(false)
  }

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
  }

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <div className='App'>
      <Title
        title='Mario Kingdom Events'
        subtitle='All the latest events in mario kingdom'
      />
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}
      {showEvents && <EventList events={events} handleClick={handleClick} />}
      {showModal && (
        <Modal handleClose={handleClose}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}
      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div>
  )
}

export default App
