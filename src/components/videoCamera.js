import React from 'react'
import Webcam from 'react-webcam'
import Form from './formFirstStep'
import '../App.css'

import { useRef, useState, useCallback } from 'react'

const WebcamStreamCapture = () => {
  const webcamRef = useRef(null)
  const mediaRecorderRef = useRef(null)
  const [capturing, setCapturing] = useState(false)
  const [recordedChunks, setRecordedChunks] = useState([])

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data))
      }
    },
    [setRecordedChunks]
  )

  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true)
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: 'video/webm'
    })
    // mediaRecorderRef.current.addEventListener('dataavailable', handleDataAvailable)
    mediaRecorderRef.current.start()
  }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable])

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop()
    setCapturing(false)
    mediaRecorderRef.current.addEventListener('dataavailable', handleDataAvailable)
  }, [mediaRecorderRef, setCapturing, handleDataAvailable])

  return (
    <div className="container col-12">
      <div className="mx-lg-auto">
        <div className="mb-3 col-5">
          <div className="myDiv mb-3 col-12 d-flex justify-content-end">
            <Webcam audio={false} ref={webcamRef} />
          </div>
          <div className="mb-3 col-12">
            {capturing ? (
              <button
                className="btn btn-primary col-auto"
                onClick={handleStopCaptureClick}
              >
                Stop Capture
              </button>
            ) : (
              <button
                className="btn btn-primary col-auto"
                onClick={handleStartCaptureClick}
              >
                Start Capture
              </button>
            )}
          </div>
        </div>
        <Form recordedChunks={recordedChunks} />
      </div>
    </div>
  )
}

export default WebcamStreamCapture
