import React from 'react'
import Webcam from 'react-webcam'
import SecondForm from './formSecondStep'

const PhotoCamera = () => {
  const webcamRef = React.useRef(null)
  const [imgSrc, setImgSrc] = React.useState(null)

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    setImgSrc(imageSrc)
  }, [webcamRef, setImgSrc])

  return (
    <div className="container col-12">
      <div className="mx-lg-auto">
        <div className="mb-3 col-5">
          <div className="myDiv mb-3 col-12 d-flex justify-content-end">
            <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
          </div>
          <button onClick={capture} className="btn btn-primary col-auto">
            Capture photo
          </button>
          {imgSrc && <img src={imgSrc} alt="Human face" />}
        </div>
        <SecondForm picture={imgSrc} />
      </div>
    </div>
  )
}

export default PhotoCamera
