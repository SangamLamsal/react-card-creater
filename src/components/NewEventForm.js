import { useState } from 'react'
import './NewEventForm.css'

export default function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('bhaktapur')
  //   const title = useRef()
  //   const date = useRef()

  const resetForm = () => {
    setTitle('')
    setDate('')
    setLocation('bhaktapur')
    // title.current.value = ''
    // date.current.value = ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const event = {
      title: title,
      //   title: title.current.value,
      //   date: date.current.value,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 10000),
    }
    addEvent(event)
    resetForm()
  }

  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input
          type='text'
          //   ref={title}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          type='date'
          //   ref={date}
          onChange={(e) => setDate(e.target.value)}
          value={date}
        ></input>
      </label>
      <label>
        <span>Event location:</span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value='bhaktapur'>Bhaktapur</option>
          <option value='kathmandu'>Kathmandu</option>
          <option value='lalitpur'>Lalitpur</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  )
}
