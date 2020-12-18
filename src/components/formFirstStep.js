import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function From(props) {
  const [pan, setPan] = useState(null)
  const [video, setVideo] = useState(null)
  const [inputs, setInputs] = useState({})

  console.log(props.recordedChunks)

  const handleChange = (e) => {
    e.persist()
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }))
  }

  const handleFileChange = (e) => {
    setPan(e.target.files[0])
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const blob = new Blob(props.recordedChunks, {
      type: 'video/webm'
    })

    setVideo(blob)
    const data = {
      name: inputs.name,
      email: inputs.email,
      pan,
      video
    }

    axios.post('http://localhost:8000/upload', data, {
      // receive two    parameter endpoint url ,form data
    })
  }

  return (
    <div className="col-lg-6 col-md-8 d-flex justify-content-start">
      <form onSubmit={handleSubmit} className="mb-3 col-12">
        <div className="col-lg-12 col-md-12 mb-3">
          <label for="Name" className="visually-hidden" class="col-sm-2 col-form-label">
            Name
          </label>
          <input
            className="form-control"
            placeholder="John Doe"
            name="name"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="col-lg-12 col-md-12 mb-3">
          <label for="Name" className="visually-hidden" class="col-sm-2 col-form-label">
            Email
          </label>
          <input
            className="form-control"
            placeholder="name@email.com"
            name="email"
            type="email"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 mb-3">
          <label for="formFile" class="form-label">
            Document
          </label>
          <input
            class="form-control"
            type="file"
            id="formFile"
            name="pan"
            onChange={handleFileChange}
          />
        </div>
        <div className="col-12 mb-3"></div>
        <button type="submit" className="btn btn-primary col-auto">
          Submit
        </button>
      </form>
    </div>
  )
}
