import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function SecondForm(props) {
  const [picture, setPicture] = useState(null)
  const [inputs, setInputs] = useState({})

  const handleChange = (e) => {
    e.persist()
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // setPicture(props.picture)

    function dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n)

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }

      return new File([u8arr], filename, { type: mime })
    }

    //Usage example:
    var file = dataURLtoFile(props.picture, 'img.jpg')

    let form_data = new FormData()
    const data = {
      name: inputs.name,
      email: inputs.email,
      picture: file
    }

    // console.log(data.picture)

    for (var key in data) {
      form_data.append(key, data[key])
    }

    axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'

    axios.post('http://localhost:5000/test_face', form_data, {
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
        <button type="submit" className="btn btn-primary col-auto">
          Submit
        </button>
      </form>
    </div>
  )
}
