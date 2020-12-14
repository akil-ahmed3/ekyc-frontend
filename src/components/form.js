import React from 'react'
import axios from 'axios'

export default class From extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      pan: null
      // video: null
    }

    // this.name = this.name.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
    this.captureVideo = this.captureVideo.bind(this)
  }

  handleChange(event) {
    console.log(event.target.value, event.target.files)
    this.setState({
      name: event.target.value
    })
  }

  handleFileChange(event) {
    this.setState({
      pan: event.target.files ? event.target.files[0] : null
    })
  }

  captureVideo(event) {
    // console.log('video')
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state.name, this.state.pan)

    const data = new FormData()

    data.append('name', this.state.name)
    data.append('pan', this.state.pan)

    axios.post('http://localhost:8000/upload', data, {
      // receive two    parameter endpoint url ,form data
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              // value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Document:
            <input type="file" onChange={this.handleFileChange} />
          </label>

          <label>
            Video:
            <input type="button" name="video" value="Video" onClick={this.captureVideo} />
          </label>

          <input type="submit" value="Submit" />
        </form>
        <canvas />
      </div>
    )
  }
}
